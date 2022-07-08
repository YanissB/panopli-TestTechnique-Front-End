import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "../components/SideMenu";
import ProductsCard from "../components/ProductsCard";
import { Box } from "@welcome-ui/box";
import Header from "../components/Header";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/furnitures")
      .then((res) => setData(res.data));
  }, []);

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
        <Box display="flex" w="100%">
          <ul>
            {data.map((furnitures, index) => (
              <ProductsCard key={index} furnitures={furnitures} />
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default AllProducts;
