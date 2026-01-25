import CourseCard from "@/shared/components/CourseCard";
import React from "react";
import { Col, Row } from "react-bootstrap";

const CourseList = (props) => {
  const courses = props.courses;
  console.log("Course List" , props);
  return (
    <Row className="mt-3">
      {Array.isArray(courses) &&
        courses.map((course) => (
          <Col key={course.id} md={4}>
            <CourseCard course={course} />
          </Col>
        ))}
    </Row>
  );
};

export default CourseList;
