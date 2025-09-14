import { Box, Typography, Chip } from "@mui/material";

function CTA() {


    return (
        <Box sx={{ maxWidth: '800px', backgroundColor: '#292929', margin: 'auto', display: 'flex', borderRadius: '8px', mx: '5', minHeight:'340px' }}>
            <Box sx={{ width: '40%', display: 'flex', flexDirection: "column", gap: 3, justifyContent: 'center', alignItems: 'center', my: '6' }}>
                <Typography variant="h4" sx={{ textAlign: "center", display: 'dlex', color: 'white' }}>Need to customize
                    this template?</Typography>

                <Chip label="view pricing ↗" component="button" key='view pricing' sx={{ display: 'flex', backgroundColor: 'white', mb: 3, width: "150px", minHeight: '2.5rem', fontSize: '1rem', fontWeight: '500' }} />
            </Box>

            <Box sx={{ width: '60%', display: 'flex', justifyContent: 'center' }}>
                <Box
                    component="img"
                    src="https://cdn.prod.website-files.com/66fd3231b0d50d23f828214d/679295782a0912fe57f9ff57_custom.webp"
                    sx={{
                        width: '100%',
                        height: 'aotu',
                        borderRadius: "10px",
                        objectFit: "cover",
                    }}
                />

            </Box>

        </Box>
    )
}

export default CTA;