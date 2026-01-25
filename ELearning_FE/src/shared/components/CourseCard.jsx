import React from 'react'
import { Card, Badge, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Card className="shadow-sm border-1 rounded-4 overflow-hidden my-3" style={{ width: "100%", height: 430 }}>
      {/* Image + badge overlay */}
      <div className="position-relative">
        <Card.Img
          src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop"
          alt="cover"
          style={{ height: 170, objectFit: "cover" }}
        />

        <Badge
          bg="primary"
          className="position-absolute rounded-circle d-flex flex-column justify-content-center align-items-center text-center fw-bold"
          style={{
            width: 72,
            height: 72,
            right: 14,
            bottom: -18,
            lineHeight: 1.05,
          }}
        >
          BEST
          <br />
          SELLER
        </Badge>
      </div>

      <Card.Body className="p-3">
        <Card.Title className="fw-bold fs-4 mb-2">
          {/* Design system with <br />
          React programme */}
          <Nav.Link as={Link} to="/courses">
            Courses
          </Nav.Link>
        </Card.Title>

        <div className="d-flex justify-content-between align-items-end">
          <div>
            <div className="text-secondary small mb-2">Colt stelle</div>

            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold text-danger">5.0</span>
              {/* <Stars value={rating} /> */}
            </div>
          </div>

          <div className="fw-bold fs-4">$20</div>
        </div>

        <hr className="my-3 opacity-25" />

        <div className="d-flex justify-content-between text-secondary fw-semibold small">
          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#5b5bff" }}>📘</span>
            <span>12 classes</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#5b5bff" }}>👥</span>
            <span>130 students</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CourseCard