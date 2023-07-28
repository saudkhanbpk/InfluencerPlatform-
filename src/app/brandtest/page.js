'use client'
import React from "react";
import { Box, Button } from "@mui/material";

// ... (rest of the code) ...

const MyComponent = ({ classes }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: ["column", "row"] }}>
      {/* Sidebar */}
      <Box
        sx={{
          display: ["flex", "block"], // Flex on desktop, Block (column) on mobile
          flexDirection: ["row", "column"], // Row on desktop, Column on mobile
          alignItems: "center", // Center items horizontally
          width: ["auto", "100%"], // Auto width on desktop, Full width on mobile
          p: 2, // Padding for the Sidebar
          borderRight: ["1px solid #ccc", "none"], // Right border on desktop, none on mobile
          borderBottom: ["none", "1px solid #ccc"], // Bottom border on desktop, none on mobile
        }}
      >
        {/* Sidebar content */}
        {/* Add your sidebar content here */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <Sidebar />
      </Box>

      {/* Main content */}
      <Box sx={{ width: "100%" }}>
        {/* ... (rest of the code) ... */}

      </Box>
    </Box>
  );
};

export default MyComponent;
