import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Spinner,
} from "react-bootstrap";
import courseService from "./services/course.service";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await courseService.findById(id);
        setCourse(res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (!course) {
    return <div className="text-center mt-5">Course not found</div>;
  }

  return (
    <Container className="my-5">
      <Row>
        {/* LEFT CONTENT */}
        <Col md={8}>
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded-4 mb-4"
            style={{ maxHeight: 360, objectFit: "cover", width: "100%" }}
          />

          <h1 className="fw-bold mb-3">{course.title}</h1>

          <div className="d-flex align-items-center gap-3 mb-3">
            <Badge bg="info">{course.level}</Badge>
            <span className="fw-semibold text-danger">
              ⭐ {course.rating}
            </span>
            <span className="text-muted">
              ({course.students} students)
            </span>
          </div>

          {/* Instructor */}
          <Card className="border-0 shadow-sm rounded-4 p-3 mb-4">
            <div className="d-flex align-items-center gap-3">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="rounded-circle"
                width={64}
                height={64}
              />
              <div>
                <div className="fw-bold">{course.instructor.name}</div>
                <div className="text-muted small">
                  {course.instructor.role}
                </div>
              </div>
            </div>
          </Card>

          {/* Course info */}
          <Row className="text-secondary fw-semibold">
            <Col md={4}>📘 {course.classes} classes</Col>
            <Col md={4}>📂 {course.sections} sections</Col>
            <Col md={4}>⏱ {course.totalHours} hours</Col>
          </Row>
        </Col>

        {/* RIGHT SIDEBAR */}
        <Col md={4}>
          <Card className="shadow-sm rounded-4 p-4 sticky-top" >
            <div className="fw-bold fs-2 text-primary mb-3">
              ${course.price}
            </div>

            <Button variant="primary" size="lg" className="w-100 mb-3">
              Enroll Now
            </Button>

            <Button variant="outline-secondary" className="w-100">
              Add to Wishlist
            </Button>

            <hr />

            <div className="small text-muted">
              ✔ Full lifetime access <br />
              ✔ Certificate of completion <br />
              ✔ Access on mobile and TV
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetail;
