import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Hamburger from "./components/Hamburger";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import About from "./components/About";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Hamburger />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
