import React from "react";
import HeroSection from "../components/HeroSection";
import BiographySection from "../components/about/BiographySection";
import CareerHighlights from "../components/about/CareerHighlights";
import AchievementsTimeline from "../components/about/AchievementsTimeline";
import PersonalInterests from "../components/about/PersonalInterests";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-900 to-black">
      <BiographySection />
      <CareerHighlights />
      <AchievementsTimeline />
      <PersonalInterests />
    </div>
  );
};



export default About;
