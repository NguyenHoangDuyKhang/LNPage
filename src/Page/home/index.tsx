import { Box } from "@mui/material";
import Slide from "./slide";
import News from "./news";
import CTA from "./CTA";
import FeatureHighlights from "./FeatureHighlights";
import Introduce from "./Introduce";
import Features from "./Features";

import FigmaFile from "./FigmaFile";
import Advertisement from "./Advertisement";
import Templates from "./BoxTemplates";
function Home() {
    return (
        <>

            <Box sx={{ display: "flex", width: "100%" }}>
                <Box sx={{ width: "60%" }}>
                    <News />
                    <CTA />
                    <FeatureHighlights />
                    <Introduce/>
                    <Features/>
                </Box>

                <Box sx={{ width: "40%" }}>
                    <Slide />
                </Box>
            </Box>

            <Box>
                <FigmaFile/>
                <Advertisement/>
                <Templates/>
            </Box>


        </>
    )
}

export default Home;