import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <div className="h-dvh border-red-500"></div>
    </main>
  );
};

export default App;
