import { Box } from "@mui/material";
import Slide from "./slide";
import News from "./news";
import CTA from "./CTA";
import FeatureHighlights from "./FeatureHighlights";
function Home() {
    return (
        <>

            <Box sx={{ display: "flex", width: "100%" }}>
                <Box sx={{ width: "60%" }}>
                    <News />
                    <CTA />
                    <FeatureHighlights />
                </Box>

                <Box sx={{ width: "40%" }}>
                    <Slide />
                </Box>
            </Box>


        </>
    )
}

export default Home;