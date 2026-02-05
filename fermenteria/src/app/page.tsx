import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import MenuPreview from "@/components/sections/MenuPreview";
import Wines from "@/components/sections/Wines";
import GlutenFree from "@/components/sections/GlutenFree";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <MenuPreview />
      <Wines />
      <GlutenFree />
      <Testimonials />
      <Location />
      <About />
      {/* Additional sections will be added here */}
    </>
  );
}
