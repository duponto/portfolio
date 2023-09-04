import React from 'react';
import { Typography, Stack} from '@mui/material/';
import FlexButton from 'components/FlexButton';

interface TopBarProps {
    isTop: boolean;
}

const TopBar = ({isTop} : TopBarProps) => {
    return (
        <Typography
            variant="h5"
            style={{
                position: isTop ? "relative" : "fixed",
                top: isTop ? "auto" : 0,
                left: 0,
                width: "100%",
                background: "#424242",
                padding: "0.5rem",
                color: "white",
            }}>
            <Stack spacing={2} direction={"row"} justifyContent="center">
                <FlexButton
                    variant= "outlined"
                    href= "#about"
                    fontFamily= "Roboto"
                    content = "Sobre Mim"
                />
                <FlexButton
                    variant="outlined"
                    href="#education"
                    fontFamily="Roboto"
                    content = "Formação"
                />
                <FlexButton
                    variant="outlined"
                    href="#portfolio"
                    fontFamily="Roboto"
                    content = "Portfólio"
                />
                <FlexButton
                    variant="outlined"
                    href="#contact"
                    fontFamily="Roboto"
                    content = "Contato"
                />
            </Stack>
        </Typography>
    )
}

export default TopBar;