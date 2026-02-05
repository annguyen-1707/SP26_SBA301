import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseFilter from "../components/CourseFilter";
import CourseList from "../components/CourseList";
import { useLoaderData } from "react-router-dom";
import HeroSection from "@/features/public-site/components/HeroSection";

const PublicCoursePage = () => {
  const [courses, setCourses] = useState(useLoaderData());
  // Call API

  console.log(courses);

  return (
    <>
      <HeroSection />
      <section className="bg-light py-1">
        <Container fluid>
          <Row className="g-2 shadow-md">
            <Col md={2} xl={3}>
              <div className="bg-white p-4 rounded-3 h-100">
                <CourseFilter />
              </div>
            </Col>

            <Col md={11} xl={9}>
              <div className="bg-white p-4 rounded-3 shadow-md">
                <CourseList courses={courses} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PublicCoursePage;
