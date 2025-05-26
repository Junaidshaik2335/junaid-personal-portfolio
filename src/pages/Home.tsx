
import HeroSection from "@/components/home/HeroSection";
import QuickStats from "@/components/home/QuickStats";
import SkillsShowcase from "@/components/home/SkillsShowcase";
import BriefAbout from "@/components/home/BriefAbout";
import CallToAction from "@/components/home/CallToAction";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <HeroSection />
      <QuickStats />
      <SkillsShowcase />
      <BriefAbout />
      <CallToAction />
    </div>
  );
};

export default Home;
