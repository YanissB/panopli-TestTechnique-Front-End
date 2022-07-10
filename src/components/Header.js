import React from "react";
import logo from "../assets/logo-panopli.png";
import cart from "../assets/cartIcon.png";
import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";

const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="success.200"
      alignItems="center"
    >
      <a href="/">
        <img src={logo} alt="panopli's logo" />
      </a>

      <Text variant="h5">TEST TECHNIQUE</Text>
      <Box marginLeft="50rem">
        <a href="/cart">
          <img src={cart} alt="cart icon" width="20%" />
        </a>
      </Box>
    </Box>
  );
};

export default Header;
