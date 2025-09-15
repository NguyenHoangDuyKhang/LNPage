import { Box, Typography, Chip } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

function Templates() {

    const DataTemplates = [
        { name: 'Finantu | Technology website template', description: 'Finantu is a Webflow template built for finance SaaS platforms and mobile apps. With a modern layout and responsive d...', img: 'https://cdn.prod.website-files.com/673ce2d41331913bdbf6b90d/68b759db87c08265d932ec6a_Temlis%20-%2001.webp' },
        { name: 'Corevia | Professional Services website template', description: 'Corevia is a Webflow template for banking, investment, and startups. With modern layouts and flexible sections, it he...', img:'https://cdn.prod.website-files.com/673ce2d41331913bdbf6b90d/68b06b533f64c3f3e0287e11_Temlis%20-%2001.webp' },
        { name: 'Contelas | Technology website template', description: 'Contelas is a Webflow template for marketing agencies and mobile app businesses. Showcase your services and products ...', img:'https://cdn.prod.website-files.com/673ce2d41331913bdbf6b90d/68a5df65a0ff2a9e97728164_Temlis%20-%2001.webp' },
        { name: 'Pipely | Startup & SaaS website template', description: 'Pipely is a template for Consulting and Coaching and Software and SaaS. It offers flexible layouts and scalable compo...', img: 'https://cdn.prod.website-files.com/673ce2d41331913bdbf6b90d/689a1727ef1f4554dde3e9cb_Temlis%20-%2001-p-2000.webp' },
        { name: 'Exotica | Portfolio website template', description: 'Exótica is a bold, minimal portfolio template for creatives. Its scroll-based layout and modular design let you showc...', img:'https://cdn.prod.website-files.com/673ce2d41331913bdbf6b90d/6877b3fd89b2d220fe8bede1_Exotica%20Framer%20-%201.webp' },
        { name: 'Coverly | Professional Services website template', description: 'Coverly is a Webflow template perfect for lawyers and law firms looking to showcase their services professionally. Id...', img:"https://cdn.prod.website-files.com/673ce2d41331913bdbf6b90d/6863f166c63c94d3e913c547_Temlis%20-%2001.webp"},
    ]

    return (
        <>
            <Box sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', mt: 3, ml: 10 }}>
                <Typography variant="h4">
                    Similar templates
                </Typography>
                <Chip label="All templates ↗" variant="outlined" sx={{ width: "200px", backgroundColor: 'gray', mb: 3, minHeight: '2.5rem', fontSize: '1rem', fontWeight: '500' }} />
            </Box>


           
                <Box sx={{ display: 'flex', flexFlow: 'wrap', width: '100%', mt: 4, ml: 4, gap: 2 }}>
                     {DataTemplates.map((item) => (
                    <Card sx={{ maxWidth: '45%', borderRadius: '18px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="auto"
                                image={item.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                                ))}

                </Box>




        </>
    )
}

export default Templates;