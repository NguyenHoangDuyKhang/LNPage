import { Box, Typography } from "@mui/material";

function FigmaFile() {

    const dataSupport = [
        {
            title: 'Nicepay - Support',
            description: 'Nicepay Website Template is made to be simple to edit and customize. If you run into any issues, notice a bug, or just want to say hello, email us at help@temlis.com. We’re happy to help!'
        }
    ]

    return (
        <>
            <Box sx={{ display: 'flex', flexFlow: 'column', maxWidth: '800px', margin: 'auto', my: 4 }}>
                <Typography
                    variant="h3"
                >
                    Nicepay - Free Figma File
                </Typography>

                <Typography variant="body1" sx={{ textAlign: "left", display: 'dlex', color: 'black', fontFamily: 'Geist, Arial, sans-serif', mt: 2 }}>
                    Includes a fully editable Figma file, making it easy for you to customize all design elements to suit your brand’s needs. Simply send your purchase receipt to the provided email, and you’ll receive access to the Figma file for further modifications.                </Typography>


                <Box sx={{ display: 'flex', flexFlow: 'column', Width: '100%', height: "100%", backgroundColor: "#292929", borderRadius: '10px', mt: 4 }}>
                    <Box
                        sx={{ display: 'flex', flexFlow: "row, my: 5", gap: 3 }}
                    >

                        <Typography
                            variant="h5"
                            sx={{ color: 'white', textAlign: 'center', mt: 4, ml: 4 }}
                        >
                            Get your FREE Figma file
                        </Typography>

                        <Box
                            component="img"
                            src={'https://cdn.prod.website-files.com/66fd3231b0d50d23f828214d/673f885e011723dd0fdae86f_F.svg'}
                            sx={{
                                width: "40px",
                                flexShrink: 0,
                                objectFit: "cover",
                                mt: 4
                            }}
                        />
                        <Box
                            component="img"
                            src={'https://cdn.prod.website-files.com/66fd3231b0d50d23f828214d/673f883cbf931d728126b13a_free.svg'}
                            sx={{
                                width: "90px",
                                flexShrink: 0,
                                objectFit: "cover",
                                mt: 4
                            }}
                        />


                    </Box>

                    <Typography variant="body1" sx={{ display: 'flex', color: 'white', mt: 2, ml: 4, mb: 4 }}>
                        With your purchase, you’ll get the Figma file for your Webflow or Framer template. Email us your order confirmation, and we’ll send it to your inbox.
                    </Typography>


                   
                </Box>

                 <Box >
                        {dataSupport.map((item, index) => (
                            <Box key={index} sx={{ my: 4 }}>
                                <Typography variant="h3">{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Geist, Arial, sans-serif'}}>
                                    {item.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

            </Box>
        </>
    )
}

export default FigmaFile;