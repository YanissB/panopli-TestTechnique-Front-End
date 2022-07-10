import React from "react";
import logo from "../assets/logo-panopli.png";
import cart from "../assets/cartIcon.png";
import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";

const Header = () => {
  return (
    <Box
      display="flex"
      flex-flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="success.200"
      alignItems="center"
    >
      <Box display="flex" justifyContent="flex-start">
        <a href="/">
          <img src={logo} alt="panopli's logo" />
        </a>

        <Text variant="h5" paddingTop="1.5rem">
          TEST <br />
          TECHNIQUE
        </Text>
      </Box>
      <Box paddingRight="2rem" paddingBottom="1.5rem">
        <a href="/cart">
          <img src={cart} alt="cart icon" width="60" />
        </a>
      </Box>
    </Box>
  );
};

export default Header;
