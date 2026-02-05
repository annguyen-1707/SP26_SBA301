// CartList.jsx
import { formatVND } from "@/shared/utils/formatters";
import React from "react";
import { Card, ListGroup, Row, Col, Image, Badge, Button } from "react-bootstrap";

// ===== Mock cart data =====
const mockCart = [
  {
    id: "react-lms-fe",
    title: "React LMS Frontend: Xây dựng giao diện LMS từ A-Z",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=60",
    instructor: "Dieu Nguyen",
    level: "Beginner to Intermediate",
    rating: 4.6,
    price: 399000,
    originalPrice: 899000,
  },
  {
    id: "typescript-react",
    title: "TypeScript cho React Developer",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=400&q=60",
    instructor: "Pham Quoc",
    level: "Intermediate",
    rating: 4.8,
    price: 399000,
    originalPrice: 899000,
  },
];

// ===== Star UI (simple) =====
const StarRating = ({ value = 0 }) => {
  const fullStars = Math.floor(value);

  return (
    <span className="text-warning">
      {"★".repeat(fullStars)}
      <span className="text-muted">{"★".repeat(5 - fullStars)}</span>
    </span>
  );
};

export default function CartList() {
  return (
    <Card className="border-0 shadow-sm">
      <ListGroup variant="flush">
        {mockCart.map((item) => (
          <ListGroup.Item key={item.id} className="p-3">
            <Row className="g-3 align-items-start">
              {/* Image */}
              <Col xs={4} md={3}>
                <div
                  className="rounded overflow-hidden bg-light"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fluid
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </Col>

              {/* Info */}
              <Col xs={8} md={6}>
                <div className="fw-bold mb-1">{item.title}</div>

                <div className="text-muted small mb-1">
                  {item.instructor}
                </div>

                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="fw-semibold">{item.rating}</span>
                  <StarRating value={item.rating} />
                </div>

                <div className="d-flex flex-wrap gap-2">
                  <Badge bg="light" text="dark">
                    {item.level}
                  </Badge>
                </div>

                <div className="d-flex gap-3 mt-2 small">
                  <Button variant="link" className="p-0 text-danger">
                    Xoá
                  </Button>
                  <Button variant="link" className="p-0">
                    Lưu để mua sau
                  </Button>
                </div>
              </Col>

              {/* Price */}
              <Col md={3} className="text-md-end">
                <div className="fw-bold">
                  {formatVND(item.price)}
                </div>
                <div className="text-muted text-decoration-line-through small">
                  {formatVND(item.originalPrice)}
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
