import React from "react";
import { Button, Typography } from "@mui/material";

const FlexButton = ({variant, href, customTheme, content}) => {
    return(
        <Button 
            variant={variant}
            href={href}
            color="inherit"
            >
            <Typography style={{fontFamily: customTheme}}>
                {content}
            </Typography>
        </Button>
    );
}

export default FlexButton