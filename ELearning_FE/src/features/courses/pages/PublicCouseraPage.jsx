import React, { useContext, useEffect, useMemo, useReducer, useState } from "react";
import CourseList from "../components/CourseList";
import courseService from "../services/course.service";
import { useLoaderData } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import CouseraFilter from "../components/CouseraFilter";
import { CartContext } from "@/app/provider/CartContext";

const PublicCouseraPage = () => {
  const loaderData = useLoaderData();
  const [courses, setCourses] = useState(Array.isArray(loaderData) ? loaderData : []);
  const [filters, setFilters] = useState({});
  const { state, dispatch } = useContext(CartContext);

  // useEffect(() => {
  //   courseService.findAll(filters).then((res) => {
  //     setCourses(Array.isArray(res.data) ? res.data : []);
  //   });
  // }, [filters]);

  useEffect(() => {
    console.log("filters", filters)
    if (Object.keys(filters).length === 0) return;

    courseService.findAll().then((res) => {
      setCourses(Array.isArray(res.data) ? res.data : []);
    });

  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (filters.level && course.level !== filters.level) return false;
      if (filters.rating && course.rating < filters.rating) return false;
      if (filters.price && course.price > filters.price) return false;
      return true;
    });
  }, [courses, filters]);

  const totalCourses = useMemo(() => filteredCourses.length, [filteredCourses]);

  useEffect(() => {
    console.log("courses updated", courses);
  }, [courses]);

  // const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  // const totalPrice = useMemo(
  //   () => cart.items.reduce((sum, c) => sum + c.price, 0),
  //   [cart.items]
  // );
  return (
    <section className="bg-light p-4 my-5">
      <Container >
        {/* <Row>
          <div className="mb-3 fw-semibold">
            Cart: {state.items.length} items
          </div>

          <ul>
            {state.items.map((c) => (
              <li key={c.id}>
                {c.title} - ${c.price}
                <button
                  className="ms-2"
                  onClick={() => dispatch({ type: "REMOVE", payload: c.id })}
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
        </Row> */}
        <Row className="bg-white p-4 rounded-3">
          Tổng số khóa học : {totalCourses}
        </Row>
        <Row className="mt-5">
          <Col md={3} xl={4} className="bg-white p-4 rounded-3 ">
            <CouseraFilter onFilter={setFilters} />
          </Col>
          <Col md={9} xl={8} className="bg-white">
            <CourseList courses={filteredCourses}
              onAddToCart={(course) => dispatch({ type: "ADD", payload: course })}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PublicCouseraPage;
