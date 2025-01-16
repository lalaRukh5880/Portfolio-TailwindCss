import Image from "next/image";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
  <main>
    <Hero />
    <Skill />
    <Contact />
    <About />
  </main>
  );
}
