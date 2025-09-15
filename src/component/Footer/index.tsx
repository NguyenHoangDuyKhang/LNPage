import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#292929",
        color: "white",
        py: 4,
        mt: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          px: 2,
        }}
      >
        {/* Logo / Brand */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          MyCompany
        </Typography>

        {/* Navigation links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link href="#" underline="hover" color="inherit">
            About
          </Link>
          <Link href="#" underline="hover" color="inherit">
            Services
          </Link>
          <Link href="#" underline="hover" color="inherit">
            Contact
          </Link>
        </Box>

        {/* Social media */}
        <Box>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        color="grey.400"
        align="center"
        sx={{ mt: 3 }}
      >
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </Typography>
    </Box>
  );
}
