import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import PublicHeader from "../../../shared/components/PublicHeader";
import PopularCourseSection from "../components/PopularCourseSection";
import PopularCategory from "../components/PopularCategory";
import PublicFooter from "@/shared/components/PublicFooter";

const PublicHomePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  // Call
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <>

      <HeroSection />

      <PopularCourseSection isLoading={isLoading} />

      <PopularCategory />

    </>
  );
};

export default PublicHomePage;