import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { grey} from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const temaHeader = createTheme({
    palette:{
        primary:{
            main: grey[800]
        },
        secondary:{
            main: grey[900]
        }
    }
})

const Header = () => {
    return (
        <ThemeProvider theme={temaHeader}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography 
                        variant="h5"
                        style={{
                            textAlign:"center",
                            width: "100%"
                        }}>
                        Bem-vindo ao portfólio de Gabriel Dupont Muenchen!
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
  };
  
  export default Header;