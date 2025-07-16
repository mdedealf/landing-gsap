import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSections from "./sections/BenefitSections";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <div>
            <BenefitSections />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
