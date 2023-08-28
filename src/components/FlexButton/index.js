import React from "react";
import { Button, ThemeProvider, Typography } from "@mui/material";

const FlexButton = (props) => {
    return(
            <Button 
                variant={props.variant}
                href={props.href}
                color="inherit"
                >
                <Typography style={{fontFamily: props.customTheme}}>
                    {props.children}
                </Typography>
            </Button>
    );
}

export default FlexButton