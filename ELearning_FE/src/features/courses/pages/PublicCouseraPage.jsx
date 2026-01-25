import React, { useEffect, useState } from "react";
import CourseFilter from "../components/CourseFilter";
import CourseList from "../components/CourseList";
import courseService from "../services/course.service";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const PublicCouseraPage = () => {
  const loaderData = useLoaderData();
  const [courses, setCourses] = useState(Array.isArray(loaderData) ? loaderData : []);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    courseService.findAll(filters).then((res) => {
      setCourses(Array.isArray(res.data) ? res.data : []);
    });
  }, [filters]);

  return (
    <section className="bg-light p-4 my-5">
      <Container>
        <Row>
          <Col md={3} xl={4} className="bg-white p-4 rounded-3">
            <CourseFilter onFilter={setFilters} />
          </Col>
          <Col md={9} xl={8} className="bg-white">
            <CourseList courses={courses} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PublicCouseraPage;
