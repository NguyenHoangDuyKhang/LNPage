
import { Routes, Route } from "react-router-dom";
import Home from "../Page/home";
import About from "../Page/about";
import NotFound from "../Page/404";
export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />


                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}
