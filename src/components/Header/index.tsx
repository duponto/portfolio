import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography,Box } from '@mui/material/';
import TopBar from "components/TopBar";

const Header = () => {
    
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollTreshold = (windowHeight * 7) / 100
            setIsTop(window.scrollY <= scrollTreshold);
        };    
        window.addEventListener("scroll", handleScroll);    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AppBar position="static" sx={{backgroundColor: '#424242'}}>
            <Toolbar>
                <Box width="100%">
                    <Typography
                        variant="h5"
                        style={{
                            textAlign: "center",
                            marginTop:"1rem"
                        }}>
                        Bem-vindo ao portfólio de Gabriel Dupont Muenchen!
                    </Typography>
                    {!isTop && <TopBar isTop={!isTop}/>}
                    <TopBar
                        isTop={isTop}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
