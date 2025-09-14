import { Box, Typography } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import NotesIcon from "@mui/icons-material/Notes";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import BoltIcon from "@mui/icons-material/Bolt";
import BrushIcon from "@mui/icons-material/Brush";
import NearMeIcon from "@mui/icons-material/NearMe";
import LayersIcon from "@mui/icons-material/Layers";
import GridViewIcon from "@mui/icons-material/GridView";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const features = [
    { title: "RESPONSIVE", icon: <PhoneIphoneIcon fontSize="large" /> },
    { title: "SEO OPTIMIZED", icon: <NotesIcon fontSize="large" /> },
    { title: "RETINA READY", icon: <CropOriginalIcon fontSize="large" /> },
    { title: "FAST LOADING", icon: <BoltIcon fontSize="large" /> },
    { title: "CUSTOMIZABLE", icon: <BrushIcon fontSize="large" /> },
    { title: "INTERACTIONS", icon: <NearMeIcon fontSize="large" /> },
    { title: "CMS COLLECTIONS", icon: <LayersIcon fontSize="large" /> },
    { title: "FLEXIBLE DESIGN", icon: <GridViewIcon fontSize="large" /> },
    { title: "EXPERT SUPPORT", icon: <HeadsetMicIcon fontSize="large" /> },
];

export default function FeatureHighlights() {
    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    border: "1px solid #e0e0e0",
                    borderRadius: "16px",
                    overflow: "hidden",
                    mt: 5,
                    width: '800px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {features.map((feature, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 3,
                            borderRight: (index + 1) % 3 !== 0 ? "1px solid #e0e0e0" : "none",
                            borderBottom: index < features.length - 3 ? "1px solid #e0e0e0" : "none",
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            {feature.title}
                        </Typography>
                        {feature.icon}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
