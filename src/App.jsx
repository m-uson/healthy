import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};
