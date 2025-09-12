import { Box, Chip  } from "@mui/material";
import { useState } from "react";
import ImageSlider from "./slide-new";
 
function News() {
    const categories = [
        "STARTUP",
        "BANKING & INVESTMENT",
        "CASUAL",
        "ELEGANT",
        "ORGANIC",
    ];

    const handleClick = (label: string) => {
        console.log("Clicked:", label);
    };


    const [images] = useState([
        "https://picsum.photos/id/1015/800/400",
        "https://picsum.photos/id/1016/800/400",
        "https://picsum.photos/id/1018/800/400",
      ]);


    return (
        <>
            <Box
                component="h1"
                sx={{
                    fontFamily: "Geist, Arial, sans-serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    lineHeight: 1.06,
                }}
            >
                Nicepay | Startup & SaaS website template
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
                {categories.map((label) => (
                    <Chip
                        key={label}
                        label={label}
                        variant="outlined"
                        component="button"
                        onClick={() => handleClick(label)}
                        sx={{
                            borderRadius: "999px",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            color: "rgba(0,0,0,0.7)",
                            borderColor: "rgba(0,0,0,0.2)",
                        }}
                    />
                ))}
            </Box>

 <Box sx={{ width: "800px", margin: "auto", mt: 4 }}>
      <ImageSlider images={images} />
    </Box>

        </>
    )
}

export default News;