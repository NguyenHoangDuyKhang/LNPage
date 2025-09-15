import { Box, Typography } from "@mui/material";


function Features() {

    const featureData = [
        {
            title: "Fully Responsive Design",
            description:
                "Ensures your website looks great on all devices, from desktops to smartphones.",
        },
        {
            title: "Customizable Sections",
            description:
                "Easily personalize yoga class schedules, wellness programs, and coaching services.",
        },
        {
            title: "Clean and Modern Layout",
            description:
                "Aesthetic design that highlights your content and engages visitors.",
        },
        {
            title: "Easy-to-Use CMS",
            description:
                "Manage your content effortlessly with Webflow’s powerful CMS.",
        },
        {
            title: "SEO Optimized",
            description:
                "Built with best practices for search engine optimization to help your site rank higher.",
        },
        {
            title: "Fast Loading Times",
            description:
                "Optimized for speed, ensuring a smooth user experience.",
        },
        {
            title: "Advanced Animations",
            description:
                "Subtle animations to enhance user interaction without overwhelming the design.",
        },
    ];

    return (
        <>
            <Box sx={{ width: 800, mx: "auto", mt: 4 }}>
                {featureData.map((item, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </Box>
                ))}

                <Box
                    component="img"
                    src="https://cdn.prod.website-files.com/673ce2d41331913bdbf6b90d/6743e9b95c928d30651d635b_nicepay%20temlis.webp"
                    sx={{
                        width: '100%',
                        height: 'aotu',
                        borderRadius: "10px",
                        objectFit: "cover",
                    }}
                />

            </Box>

        </>
    )
}

export default Features;