// import { useState } from 'react'
import './App.css'
import { Box } from "@mui/material";
import AppRoutes from './routers';

import Nav from './component/Nav';
import Footer from './component/Footer';
function App() {

  return (
    <>

      <Box>
        <Nav />
        <AppRoutes />
        <Footer />
      </Box>



    </>
  )
}

export default App
