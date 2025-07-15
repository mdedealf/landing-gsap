import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
    </main>
  );
};

export default App;
