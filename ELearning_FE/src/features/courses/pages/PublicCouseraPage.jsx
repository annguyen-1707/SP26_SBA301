import React, { useEffect, useState } from "react";
import CourseFilter from "../components/CourseFilter";
import CourseList from "../components/CourseList";
import courseService from "../services/course.service";
import { useLoaderData } from "react-router-dom";

const PublicCouseraPage = () => {
  const [courses, setCourses] = useState(useLoaderData());
  const [filters, setFilters] = useState({});

  useEffect(() => {
    courseService.findAll(filters).then((res) => {
      setCourses(res.data);
    });
  }, [filters]);

  return (
    <div>
      <h2>Public Course Page</h2>

      <CourseFilter onFilter={setFilters} />
      <CourseList courses={courses} />
    </div>
  );
};

export default PublicCouseraPage;
