import React from "react";
import HeroSection from "../components/HeroSection";
import PublicHeader from "../../../shared/components/PublicHeader";
import PopularCourseSection from "../components/PopularCourseSection";
import PopularCategory from "../components/PopularCategory";

const PublicHomePage = () => {
  return (
    <>
      <PublicHeader />

      <HeroSection />

      <PopularCourseSection />

      <PopularCategory />

    </>
  );
};

export default PublicHomePage;
