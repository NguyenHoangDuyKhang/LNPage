import { Box } from "@mui/material";
import Slide from "./slide";
import News from "./news";
function Home() {
    return (
        <>

            <Box sx={{ display: "flex", width: "100%" }}>
                <Box sx={{ width: "60%" }}>
                    <News />
                </Box>

                <Box sx={{ width: "40%" }}>
                    {/* <AnotherComponent /> */}
                    <Slide />

                </Box>
            </Box>


        </>
    )
}

export default Home;