import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import NotFound from "../components/not-found";
import About from "../components/about";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
