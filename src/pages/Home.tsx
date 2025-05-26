
import HeroSection from "@/components/home/HeroSection";
import QuickStats from "@/components/home/QuickStats";
import SkillsShowcase from "@/components/home/SkillsShowcase";
import BriefAbout from "@/components/home/BriefAbout";
import CallToAction from "@/components/home/CallToAction";
import CompleteAboutSection from "@/components/home/CompleteAboutSection";
import CompletePortfolioSection from "@/components/home/CompletePortfolioSection";
import CompleteServicesSection from "@/components/home/CompleteServicesSection";
import CompleteContactSection from "@/components/home/CompleteContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <HeroSection />
      <QuickStats />
      <SkillsShowcase />
      <BriefAbout />
      <CompleteAboutSection />
      <CompletePortfolioSection />
      <CompleteServicesSection />
      <CompleteContactSection />
      <CallToAction />
    </div>
  );
};

export default Home;
