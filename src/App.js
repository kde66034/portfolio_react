import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 메인
import Main from "./components/pages/Main";

// JS
import gsapAnimation from "./components/utils/gsapAnimation";
import horizontal from "./components/utils/horizontal";
import lenis from "./components/utils/lenis";
import reveal from "./components/utils/reveal";
import changeBG from "./components/utils/changeBG";
import clock from "./components/utils/clock";
import details from "./components/utils/details";

function App() {
  useEffect(() => {
    gsapAnimation();
    horizontal();
    lenis();
    reveal();
    changeBG();
    clock();
    details();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;