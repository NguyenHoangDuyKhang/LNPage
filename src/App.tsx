import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Box } from "@mui/material";


import Nav from './component/Nav';
import Home from './Page/home';
import About from './Page/about';


import NotFound from './Page/404';
function App() {

  return (
    <>
      <Router>
        <Box>
          <Nav />
        </Box>

          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

         <Route path="*" element={<NotFound />} />
      </Routes>
        

        <Box> Footer compoennt</Box>

      </Router>

    </>
  )
}

export default App
