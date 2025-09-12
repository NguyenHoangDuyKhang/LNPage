"use client";
import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto play mỗi 10s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.6s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
          height: "100%",
        }}
      >
        {images.map((url, index) => (
          <Box
            key={index}
            component="img"
            src={url}
            alt={`Slide ${index}`}
            sx={{
              width: "100%",
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
        ))}
      </Box>

      {/* Nút lùi */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.6)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
        }}
      >
        {/* <ArrowBackIos /> */}
      </IconButton>

      {/* Nút tới */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.6)",
          "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
        }}
      >
        {/* <ArrowForwardIos /> */}
      </IconButton>
    </Box>
  );
};
 export default ImageSlider;
