import Footer from "@/components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "@/components/Price-Plane";
import Contact from "@/components/Contact";
import AdvancedAI from "@/components/Advanced-AI";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AdvancedAI/>
      <Features/>
      <Solutions/>
      <Pricing/>
      <Contact/>
      <Footer />
    </div>
  );
}