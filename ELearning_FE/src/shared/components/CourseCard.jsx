import { CartContext } from "@/app/provider/CartContext";
import { cartService } from "@/features/cart/services/cart.service";
import { useContext } from "react";
import { Card, Badge, Nav, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course, onAddToCart }) => {
  const { state } = useContext(CartContext)
  const isInCard = cartService.isInCart(state.items, course.id);

  if (!course) return null;

  const isBestSeller = course.rating >= 5;

  return (
    <Card
      className="shadow-sm border-1 rounded-4 overflow-hidden my-3"
      style={{ width: "100%", height: 430 }}
    >
      {/* Image */}
      <div className="position-relative">
        <Card.Img
          src={course.image}
          alt={course.title}
          style={{ height: 170, objectFit: "cover" }}
        />

        {isBestSeller && (
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
        )}
      </div>

      <Card.Body className="p-3">
        {/* Title */}
        <Card.Title className="fw-bold fs-6 mb-2">
          <Nav.Link
            as={Link}
            to={`/courses/${course.id}`}
            className="p-0 text-decoration-none"
          >
            {course.title}
          </Nav.Link>
        </Card.Title>

        {/* Instructor */}
        <div className="text-secondary small mb-2">
          {course.instructor?.name}
        </div>

        <div className="d-flex justify-content-between align-items-end">
          {/* Rating */}
          <div>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold text-danger">
                {course.rating.toFixed(1)}
              </span>
              <span className="text-warning">⭐</span>
            </div>
          </div>

          {/* Price */}
          <div className="fw-bold fs-4 text-primary">
            ${course.price}
          </div>
        </div>

        {/* Footer */}
        <div className="d-flex justify-content-between text-secondary fw-semibold small" style={{ marginTop: 10 }}>
          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#5b5bff" }}>📘</span>
            <span>{course.classes} classes</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span style={{ color: "#5b5bff" }}>👥</span>
            <span>{course.students} students</span>
          </div>
        </div>
        <Button
          disabled={isInCard}
          variant="primary"
          className="w-100 mt-3"
          onClick={() => onAddToCart(course)}
        >
          {isInCard ? "Đã thêm" : "Add to cart"}
        </Button>

      </Card.Body>
    </Card>
  );
};

export default CourseCard;
