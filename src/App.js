import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { Stack } from "@welcome-ui/stack";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Stack>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Stack>
  );
};

export default App;
