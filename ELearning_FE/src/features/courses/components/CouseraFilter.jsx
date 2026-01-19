import React from "react";

const CourseFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter({ q: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search course..."
        onChange={handleChange}
      />
    </div>
  );
};

export default CourseFilter;
