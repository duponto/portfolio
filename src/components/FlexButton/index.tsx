import React from "react";
import { Button, Typography } from "@mui/material";

interface FlexButtonProps {
    variant: "text" | "outlined" | "contained" | undefined;
    href: string;
    fontFamily: string;
    content: string;
}

const FlexButton = ({variant, href, fontFamily, content} : FlexButtonProps) => {
    return(
        <Button 
            variant={variant}
            href={href}
            color="inherit"
            >
            <Typography style={{fontFamily: fontFamily}}>
                {content}
            </Typography>
        </Button>
    );
}

export default FlexButton