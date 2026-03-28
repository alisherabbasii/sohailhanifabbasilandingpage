import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Welfare from "@/components/Welfare";
import Sufism from "@/components/Sufism";
import QuoteSection from "@/components/QuoteSection";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Achievements />
      <Testimonials />
      <Welfare />
      <Sufism />
      <QuoteSection />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
