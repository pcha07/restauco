import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <About />
    </div>
  );
}

export default App;
