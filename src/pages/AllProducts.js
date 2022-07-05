import React from "react";
import SideMenu from "../components/SideMenu";
import AllProductsCard from "../components/AllProductsCard";
import { Box } from "@welcome-ui/box";
import { Flex } from "@welcome-ui/flex";
import Header from "../components/Header";

const AllProducts = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Header />
      <Box
        display="flex"
        justifyContent="flex-start"
        maxHeight="360"
        w="100%"
        h="100%"
        backgroundColor="success.100"
      >
        <SideMenu />
        <Box mb="">
          <AllProductsCard />
          <AllProductsCard />
          <AllProductsCard />
        </Box>
      </Box>
    </Box>
  );
};

export default AllProducts;
