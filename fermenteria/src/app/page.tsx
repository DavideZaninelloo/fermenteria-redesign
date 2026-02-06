import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import About from "@/components/sections/About";
import MenuPreview from "@/components/sections/MenuPreview";
import Fermentation from "@/components/sections/Fermentation";
import GlutenFree from "@/components/sections/GlutenFree";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <MenuPreview />
      <Fermentation />
      <GlutenFree />
      <Testimonials />
      <Location />
    </>
  );
}
