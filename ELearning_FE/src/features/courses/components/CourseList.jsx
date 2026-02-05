import CourseCard from "@/shared/components/CourseCard";
import React from "react";
import { Col, Row } from "react-bootstrap";

const CourseList = (props) => {
  const courses = props.courses;
  console.log("Course List" + courses);
  return (
    <Row className="mt-3">
      {courses.map((course) => (
        <Col key={course.id} md={3}>
          <CourseCard course={course} />
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;
