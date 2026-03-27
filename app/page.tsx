import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MilitaryExperience from "@/components/MilitaryExperience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Welfare from "@/components/Welfare";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MilitaryExperience />
      <Skills />
      <Achievements />
      <Testimonials />
      <Welfare />
      <Contact />
      <Footer />
    </main>
  );
}
