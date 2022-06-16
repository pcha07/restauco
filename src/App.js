import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Menu/>
    </div>
  );
}

export default App;
