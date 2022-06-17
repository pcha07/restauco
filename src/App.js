import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden relative">
      <Navbar />
      <Hero/>
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
