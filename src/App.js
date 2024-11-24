import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./CONTENT/ShopContext";

import Navbar from "./COMPONENT/Navbar";
import Shop from "./PAGES/Shop";
import ShopCategory from "./PAGES/ShopCategory";
import Product from "./PAGES/Product";
import Cart from "./PAGES/Cart";
import LoginSignup from "./PAGES/LoginSignup";
import Footer from "./COMPONENT/Footer/Footer";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory />} />
          <Route path="/kids" element={<ShopCategory />} />
          <Route path="/womens" element={<ShopCategory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
