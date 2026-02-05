// CourseDetail.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Badge,
  Button,
  Card,
  ListGroup,
  Accordion,
  ProgressBar,
  Tabs,
  Tab,
  Ratio,
  Image,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { formatVND } from "@/shared/utils/formatters";
import { useParams } from "react-router-dom";
import courseService from "../services/course.service";

export default function CourseDetail() {
  const [course, setCourse] = useState(null);
  const { courseId } = useParams();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Call API to get course detail
  useEffect(() => {
    const getCourseDetail = async () => {
      try {
        const courseData = await courseService.findById(courseId);

        setCourse(courseData);
        setIsLoading(false);
      } catch (error) {
        StyleSheetList(true);
        console.error("Error fetching course details:", error);
        setMessage(
          error.message ||
            "Error loading course details. Please try again later.",
        );
      }
    };

    getCourseDetail();
  }, []);

  const [tabKey, setTabKey] = useState("overview");
  const [expanded, setExpanded] = useState("0");

  const totalLectures = useMemo(() => {
    if (!course || !course.curriculum) return 0;
    return course.curriculum.reduce((sum, sec) => sum + sec.lectures, 0);
  }, [course]);

  const handleEnroll = () => {
    // if (typeof onEnroll === "function") onEnroll(course);
    // fallback demo
    alert(`Đăng ký/Mua khoá học: ${course.title}`);
  };
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
       
      </Spinner>
    );
  }

  if (message) {
    return <Alert variant="danger">{message}</Alert>;
  }

  return (
    <div className="bg-light">
      {/* HERO */}
      <div
        className="bg-dark text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(41, 128, 125, 0.92) 0%, rgba(240, 244, 243, 0.72) 60%, rgba(0,0,0,0.55) 100%)",
        }}
      >
        <Container className="py-4 py-lg-5">
          <Row className="g-4">
            <Col lg={8}>
              <Breadcrumb className="mb-2" data-bs-theme="dark">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Courses</Breadcrumb.Item>
                <Breadcrumb.Item active>{course.title}</Breadcrumb.Item>
              </Breadcrumb>

              <h1 className="h2 fw-bold mb-2">{course.title}</h1>
              <p className="text-white-50 mb-3">{course.subtitle}</p>

              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <Badge bg="warning" text="dark" className="fw-semibold">
                  Best seller
                </Badge>

                <span className="fw-semibold">{course.rating.toFixed(1)}</span>
                <StarFill className="text-warning" />
                <span className="text-white-50">
                  ({course.ratingCount.toLocaleString("vi-VN")} đánh giá)
                </span>

                <span className="text-white-50">
                  • {course.students.toLocaleString("vi-VN")} học viên
                </span>
              </div>

              <div className="d-flex flex-wrap gap-2 text-white-50">
                <span>Cấp độ: {course.level}</span>
                <span>•</span>
                <span>Ngôn ngữ: {course.language}</span>
                <span>•</span>
                <span>Cập nhật: {course.lastUpdated}</span>
              </div>
            </Col>

            {/* Right Preview Card (desktop shows in hero) */}
            <Col lg={4} className="d-none d-lg-block">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <div className="mb-3">
                    <Ratio aspectRatio="16x9">
                      <iframe
                        src={course.previewVideoUrl}
                        title="Course preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Ratio>
                  </div>

                  <div className="d-flex align-items-end gap-2 mb-1">
                    <div className="h3 mb-0 fw-bold">
                      {formatVND(course.price.current)}
                    </div>
                    <div className="text-muted text-decoration-line-through">
                      {formatVND(course.price.original)}
                    </div>
                  </div>
                  <div className="text-danger fw-semibold mb-3">
                    {course.price.discountText}
                  </div>

                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={handleEnroll}>
                      Đăng ký ngay
                    </Button>
                    <Button variant="outline-secondary">
                      Thêm vào wishlist
                    </Button>
                  </div>

                  <hr />

                  <div className="fw-semibold mb-2">Khoá học bao gồm:</div>
                  <ListGroup variant="flush" className="small">
                    {course.includes.map((it, idx) => (
                      <ListGroup.Item key={idx} className="px-0">
                        • {it}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* MAIN */}
      <Container className="py-4 py-lg-5">
        <Row className="g-4">
          <Col lg={8}>
            {/* Highlights */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h2 className="h5 fw-bold mb-3">Bạn sẽ học được gì</h2>
                <Row className="g-2">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <Col md={6} key={idx}>
                      <div className="d-flex gap-2">
                        <span className="text-success fw-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Tabs */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Tabs
                  id="course-detail-tabs"
                  activeKey={tabKey}
                  onSelect={(k) => setTabKey(k || "overview")}
                  className="mb-3"
                >
                  <Tab eventKey="overview" title="Tổng quan">
                    <h3 className="h6 fw-bold">Mô tả</h3>
                    <p className="text-muted">
                      Khoá học tập trung vào việc xây dựng một hệ thống LMS
                      frontend hoàn chỉnh. Bạn sẽ học cách tổ chức layout,
                      component hoá, triển khai các trang quan trọng như danh
                      sách khoá học, trang chi tiết, và các khối UI thường gặp
                      trong sản phẩm thực tế.
                    </p>

                    <Row className="g-3">
                      <Col md={6}>
                        <Card className="border">
                          <Card.Body>
                            <div className="fw-semibold mb-1">Thống kê</div>
                            <div className="text-muted small">
                              {course.sections} sections • {totalLectures} bài •{" "}
                              {course.totalHours} giờ
                            </div>
                            <ProgressBar
                              now={35}
                              label="35%"
                              className="mt-3"
                            />
                            <div className="text-muted small mt-2">
                              (Demo) tiến độ học — nối với backend sau
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className="border">
                          <Card.Body>
                            <div className="fw-semibold mb-2">
                              Yêu cầu trước khi học
                            </div>
                            <ul className="mb-0">
                              {course.requirements.map((r, idx) => (
                                <li key={idx} className="text-muted">
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="curriculum" title="Nội dung">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <div className="fw-bold">Chương trình học</div>
                        <div className="text-muted small">
                          {course.curriculum.length} phần • {totalLectures} bài
                        </div>
                      </div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => setExpanded(expanded ? "" : "0")}
                      >
                        {expanded ? "Thu gọn" : "Mở chương 1"}
                      </Button>
                    </div>

                    <Accordion
                      activeKey={expanded}
                      onSelect={(k) => setExpanded(k || "")}
                      alwaysOpen={false}
                    >
                      {course.curriculum.map((sec, idx) => (
                        <Accordion.Item eventKey={String(idx)} key={idx}>
                          <Accordion.Header>
                            <div className="d-flex flex-column">
                              <span className="fw-semibold">{sec.title}</span>
                              <span className="text-muted small">
                                {sec.lectures} bài • {sec.duration}
                              </span>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <ListGroup variant="flush">
                              {sec.items.map((it, j) => (
                                <ListGroup.Item
                                  key={j}
                                  className="px-0 d-flex align-items-start justify-content-between gap-3"
                                >
                                  <div className="d-flex gap-2">
                                    <span className="text-primary">▶</span>
                                    <div>{it}</div>
                                  </div>
                                  <Badge bg="light" text="dark">
                                    preview
                                  </Badge>
                                </ListGroup.Item>
                              ))}
                            </ListGroup>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Tab>

                  <Tab eventKey="instructor" title="Giảng viên">
                    <div className="d-flex gap-3 align-items-start">
                      <Image
                        src={course.instructor.avatar}
                        roundedCircle
                        width={72}
                        height={72}
                        alt={course.instructor.name}
                        style={{ objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <div className="fw-bold">{course.instructor.name}</div>
                        <div className="text-muted">
                          {course.instructor.title}
                        </div>

                        <div className="d-flex flex-wrap gap-2 mt-2 small text-muted">
                          <span>
                            {course.instructor.stats.courses} khoá học
                          </span>
                          <span>•</span>
                          <span>
                            {course.instructor.stats.students.toLocaleString(
                              "vi-VN",
                            )}{" "}
                            học viên
                          </span>
                          <span>•</span>
                          <span>
                            {course.instructor.stats.reviews.toLocaleString(
                              "vi-VN",
                            )}{" "}
                            reviews
                          </span>
                        </div>

                        <p className="mt-3 mb-0">{course.instructor.bio}</p>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="reviews" title="Đánh giá">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                      <div className="display-6 fw-bold mb-0">
                        {course.rating.toFixed(1)}
                      </div>
                      <div>
                        <StarFill className="text-warning" />
                        <div className="text-muted small">
                          {course.ratingCount.toLocaleString("vi-VN")} đánh giá
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <Form.Control
                        placeholder="Tìm trong đánh giá (demo)..."
                        aria-label="Search reviews"
                      />
                    </div>

                    <div className="d-grid gap-3">
                      {course.reviews.map((rv, idx) => (
                        <Card key={idx} className="border">
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <div className="fw-semibold">{rv.name}</div>
                                <div className="text-muted small">
                                  {rv.date}
                                </div>
                              </div>
                              <div className="text-nowrap">
                                <StarFill className="text-warning" />
                              </div>
                            </div>
                            <p className="mt-2 mb-0 text-muted">{rv.content}</p>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Sticky Card (mobile/tablet shows here) */}
          <Col lg={4}>
            <div className="d-lg-none">
              <Card className="shadow-sm border-0 mb-4">
                <Card.Body>
                  <div className="mb-3">
                    <Ratio aspectRatio="16x9">
                      <iframe
                        src={course.previewVideoUrl}
                        title="Course preview mobile"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Ratio>
                  </div>

                  <div className="d-flex align-items-end gap-2 mb-1">
                    <div className="h3 mb-0 fw-bold">
                      {formatVND(course.price.current)}
                    </div>
                    <div className="text-muted text-decoration-line-through">
                      {formatVND(course.price.original)}
                    </div>
                  </div>
                  <div className="text-danger fw-semibold mb-3">
                    {course.price.discountText}
                  </div>

                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" onClick={handleEnroll}>
                      Đăng ký ngay
                    </Button>
                    <Button variant="outline-secondary">
                      Thêm vào wishlist
                    </Button>
                  </div>

                  <hr />

                  <div className="fw-semibold mb-2">Khoá học bao gồm:</div>
                  <ListGroup variant="flush" className="small">
                    {course.includes.map((it, idx) => (
                      <ListGroup.Item key={idx} className="px-0">
                        • {it}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>

            {/* Small meta card */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="fw-semibold mb-2">Thông tin nhanh</div>
                <ListGroup variant="flush">
                  <ListGroup.Item className="px-0 d-flex justify-content-between">
                    <span className="text-muted">Cấp độ</span>
                    <span className="fw-semibold">{course.level}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 d-flex justify-content-between">
                    <span className="text-muted">Ngôn ngữ</span>
                    <span className="fw-semibold">{course.language}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 d-flex justify-content-between">
                    <span className="text-muted">Bài giảng</span>
                    <span className="fw-semibold">{totalLectures}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 d-flex justify-content-between">
                    <span className="text-muted">Thời lượng</span>
                    <span className="fw-semibold">{course.totalHours} giờ</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 d-flex justify-content-between">
                    <span className="text-muted">Cập nhật</span>
                    <span className="fw-semibold">{course.lastUpdated}</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
