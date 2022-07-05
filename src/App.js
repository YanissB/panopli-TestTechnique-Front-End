import React from "react";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import AllProducts from "./pages/AllProducts";

const theme = createTheme({
  colors: {
    success: {
      100: "#E6FAE7",
      200: "#7EC784",
      500: "#52B45A",
      700: "#2F9237",
    },
  },
});

const App = () => {
  return (
    <WuiProvider theme={theme}>
      <AllProducts />
    </WuiProvider>
  );
};

export default App;
