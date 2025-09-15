import { Box, Typography } from "@mui/material";

function Introduce() {


    return (
        <>
            <Box sx={{display: 'flex', flexFlow: 'column', maxWidth:'800px', margin: 'auto', my: 4}}>
                <Typography variant="h3" sx={{ textAlign: "left", display: 'dlex', color: 'black' }}>
                    About Nicepay website template
                </Typography>

                <Typography variant="body1" sx={{ textAlign: "left", display: 'dlex', color: 'black', fontFamily: 'Geist, Arial, sans-serif', mt:2 }}>
                    Nicepay is a modern Webflow template designed specifically for fintech companies and financial startups aiming to establish a strong digital presence. With its clean and professional design, Nicepay provides a variety of customizable sections that can easily be adapted to showcase your financial services, data analysis tools, and payment solutions.
                </Typography>

                
                <Typography variant="body1" sx={{ textAlign: "left", display: 'dlex', color: 'black', fontFamily: 'Geist, Arial, sans-serif', mt:2 }}>
                    Fully responsive and user-friendly, this template ensures that your website looks stunning on any device while effectively conveying your brand’s message. Nicepay offers a solid foundation for businesses looking to create a professional, scalable online platform that supports their financial operations and engages their audience.
                </Typography>
            </Box>
        </>
    )
}

export default Introduce;