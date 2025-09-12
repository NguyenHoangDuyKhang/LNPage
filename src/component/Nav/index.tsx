import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Home', 'Products', 'About', 'Blog'];
import { Link } from "react-router-dom";
function Nav() {
    return (
        <AppBar position="relative" sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 3,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 2,
                            display: { md: "flex" },
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                component={Link}
                                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                                sx={{
                                    my: 2,
                                    px: 4,
                                    color: "black",
                                    borderRadius: "8px",
                                    backgroundColor: "white",
                                    position: "relative",
                                    overflow: "hidden",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "8px",
                                        padding: "2px",
                                        background:
                                            "linear-gradient(90deg, #9c27b0 0%, transparent 25%, #9c27b0 100%)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "400% 400%",
                                        zIndex: 0,
                                        WebkitMask:
                                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease",
                                    },
                                    "&:hover::before": {
                                        opacity: 1,
                                        animation: "neonBorder 2s linear infinite",
                                    },
                                    "& span": {
                                        position: "relative",
                                        zIndex: 1,
                                    },
                                    "@keyframes neonBorder": {
                                        "0%": { backgroundPosition: "0% 25%" },
                                        "25%": { backgroundPosition: "25% 50%" },
                                        "50%": { backgroundPosition: "50% 75%" },
                                        "75%": { backgroundPosition: "75% 100%" },
                                        "100%": { backgroundPosition: "100% 0%" },
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>



                    <Box sx={{ flexGrow: 0 }}>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#6c1dfeff",
                                color: "#edededff",
                                borderRadius: "10px",
                                textTransform: "none",
                                "&:hover": {
                                    backgroundImage: "linear-gradient(to right, #9d99b9ff, #6309ffff)",
                                },
                            }}
                        >
                            Free Trial
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Nav;
