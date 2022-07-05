import { Box } from "@welcome-ui/box";
import React from "react";
import logo from "../assets/logo-panopli.png";

const Header = () => {
  return (
    <Box
      flex-direction="flex-start"
      justifyContent="space-between"
      backgroundColor="success.200"
      w="100%"
    >
      <img src={logo} alt="logo panopli" />
      <h1>TEST TECHNIQUE</h1>
    </Box>
  );
};

export default Header;
