// import { useState } from 'react'
import './App.css'
import { Box } from "@mui/material";
import AppRoutes from './routers';

import Nav from './component/Nav';
// import Home from './Page/home';
// import About from './Page/about';


// import NotFound from './Page/404';
function App() {

  return (
    <>
   
      <Box>
        <Nav />
        <AppRoutes/>

      </Box>


      <Box> Footer compoennt</Box>

    </>
  )
}

export default App
