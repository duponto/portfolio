import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Stack, createTheme } from '@mui/material/';
import { grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import FlexButton from "../FlexButton";

const temaHeader = createTheme({
    palette: {
        primary: {
            main: grey[800]
        },
        secondary: {
            main: grey[900]
        }
    },
})

const Header = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ThemeProvider theme={temaHeader}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <div style={{ width: "100%" }}>
                        <Typography
                            variant="h5"
                            style={{
                                textAlign: "center",
                                marginBottom: "1rem",
                                marginTop:"1rem"
                            }}>
                            Bem-vindo ao portfólio de Gabriel Dupont Muenchen!
                        </Typography>
                        <Typography
                            variant="h5"
                            style={{
                                position: isTop ? "relative" : "fixed",
                                top: isTop ? "auto" : 0,
                                left: 0,
                                width: "100%",
                                background: temaHeader.palette.primary.main,
                                padding: "0.5rem",
                                color: "white",
                            }}>
                            <Stack spacing={2} direction={"row"} justifyContent="center">
                                <FlexButton
                                    variant="outlined"
                                    href="#about"
                                    fontFamily="Roboto"
                                >
                                    Sobre Mim
                                </FlexButton>
                                <FlexButton
                                    variant="outlined"
                                    href="#education"
                                    fontFamily="Roboto"
                                >
                                    Formação
                                </FlexButton>
                                <FlexButton
                                    variant="outlined"
                                    href="#portfolio"
                                    fontFamily="Roboto"
                                >
                                    Portfólio
                                </FlexButton>
                                <FlexButton
                                    variant="outlined"
                                    href="#contact"
                                    fontFamily="Roboto"
                                >
                                    Contato
                                </FlexButton>
                            </Stack>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;
