import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import PainPoints from "@/components/landing/PainPoints";
import Features from "@/components/landing/Features";
import OmnichannelSection from "@/components/landing/OmnichannelSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Security from "@/components/landing/Security";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <OmnichannelSection />
        <HowItWorks />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
