import React from "react";
import { AppBar, Toolbar, Typography,Box } from '@mui/material/';
import TopBar from "components/TopBar";

const Header = () => {
    return (
        <AppBar position="static" sx={{backgroundColor: '#424242'}}>
            <Toolbar>
                <Box style={{ width: "100%" }}>
                    <Typography
                        variant="h5"
                        style={{
                            textAlign: "center",
                            marginBottom: "1rem",
                            marginTop:"1rem"
                        }}>
                        Bem-vindo ao portfólio de Gabriel Dupont Muenchen!
                    </Typography>
                    <TopBar
                        isTop={true}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
