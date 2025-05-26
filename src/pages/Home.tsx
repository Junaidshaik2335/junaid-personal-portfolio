
import HeroSection from "@/components/home/HeroSection";
import QuickStats from "@/components/home/QuickStats";
import SkillsShowcase from "@/components/home/SkillsShowcase";
import BriefAbout from "@/components/home/BriefAbout";
import CallToAction from "@/components/home/CallToAction";
import AboutSection from "@/components/home/AboutSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServicesSection from "@/components/home/ServicesSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <HeroSection />
      <QuickStats />
      <SkillsShowcase />
      <BriefAbout />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
      <CallToAction />
    </div>
  );
};

export default Home;
