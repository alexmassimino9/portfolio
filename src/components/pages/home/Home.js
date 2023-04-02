import { Box } from "@mui/material";
import React from "react";
import { WelcomeSection } from "./";

//  todo : add more projects, and update styling

const Home = () => {
  return (
    <Box
      sx={{
        marginTop: "11vh",
        border: "5px solid blue",
      }}
    >
      <main className="main">
        <WelcomeSection />
      </main>
    </Box>
  );
};

export default Home;
