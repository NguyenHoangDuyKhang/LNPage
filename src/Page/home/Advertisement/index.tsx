import { Box, Typography, TextField, Button } from "@mui/material";
function Advertisement() {


    return (
        <Box sx={{ Width: '70%', backgroundColor: '#292929', margin: 'auto', display: 'flex', borderRadius: '8px', mx: '5', minHeight: 'auto' }}>
            <Box sx={{ width: '40%', display: 'flex', flexDirection: "column", gap: 3, justifyContent: 'center', alignItems: 'center', my: '6' }}>
                <Typography variant="h4" sx={{ textAlign: "left", display: 'dlex', color: 'white' }}>
                    Get 10+ FREE Templates
                </Typography>
                <Typography variant="body1" sx={{ color: 'white' }}>
                    Start building with Free Webflow, Framer, & Figma templates.
                </Typography>

                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "center",
                        width: "100%",
                        maxWidth: 300,
                        mx: "auto",
                    }}
                >
                    {/* Ô nhập email */}
                    <TextField
                        placeholder="Your email*"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            sx: {
                                borderRadius: "50px",
                                backgroundColor: "white",
                                height: "40px"
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            borderRadius: "50px",
                            backgroundColor: "#0066FF",
                            fontWeight: "bold",
                            letterSpacing: 2,
                            "&:hover": {
                                backgroundColor: "#0050cc",
                            },
                        }}
                    >
                        GET INSTANT ACCESS
                    </Button>
                </Box>

            </Box>

            <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center' }}>
                <Box
                    component="img"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/ff0ea055744733.5991b56d93f57.png"
                    sx={{
                        width: '100%',
                        height: 'aotu',
                        borderRadius: "6px",
                        objectFit: "cover",
                    }}
                />

            </Box>

        </Box>
    )
}

export default Advertisement;