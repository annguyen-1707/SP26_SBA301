import CourseCard from "@/shared/components/CourseCard";
import React from "react";
import { Col, Row } from "react-bootstrap";

const CourseList = ({courses, onAddToCart}) => {
  console.log("Course List" , courses);
  return (
    <Row className="mt-3">
      {Array.isArray(courses) &&
        courses.map((course) => (
          <Col key={course.id} md={4}>
            <CourseCard course={course} onAddToCart={onAddToCart} />
          </Col>
        ))}
    </Row>
  );
};

export default CourseList;
