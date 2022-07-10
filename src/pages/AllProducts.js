import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "../components/SideMenu";
import ProductsCard from "../components/ProductsCard";
import { Box } from "@welcome-ui/box";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/furnitures")
      .then((res) => setData(res.data));
  }, []);

  return (
    <Box display="flex" h="100%">
      <SideMenu />
      <Box
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        w="100%"
        h="100%"
        padding="xs"
        backgroundColor="success.100"
        margin="xs"
        borderRadius="10"
      >
        {data.map((furnitures, index) => (
          <ProductsCard key={index} furnitures={furnitures} />
        ))}
      </Box>
    </Box>
  );
};

export default AllProducts;
