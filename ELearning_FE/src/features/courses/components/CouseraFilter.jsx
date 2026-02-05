import React from "react";
import { Badge, Button, Form } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const CouseraFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter((prev) => ({
      ...prev,
      q: e.target.value,
    }));
  };

  return (
    <>
      <Badge className="py-3 w-100 my-3">Filter</Badge>

      <h4 className="mt-4">Categories</h4>
      <Form>
        <Form.Select size="lg" className="mt-3 py-2" onChange={handleChange}>
          <option value="">Category</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </Form.Select>

        <h4 className="mt-5">Ratings</h4>

        <Form.Check
          type="radio"
          name="rating"
          label="⭐ 5.0"
          onChange={() => onFilter((prev) => ({
            ...prev,
            rating: 5,
          }))}
        />
        <Form.Check
          type="radio"
          name="rating"
          label="⭐ 4.0 & up"
          onChange={() => onFilter((prev) => ({
            ...prev,
            rating: 4,
          }))}
        />

        <Form.Check
          type="radio"
          name="rating"
          label="⭐ 3.0 & up"
          onChange={() => onFilter((prev) => ({
            ...prev,
            rating: 3,
          }))}
        />

        <h4 className="mt-5">Levels</h4>

        <Form.Check
          type="checkbox"
          label="Beginner"
          onChange={(e) =>
            onFilter((prev) => ({
              ...prev, level: e.target.checked ? "Beginner" : null
            }))
          }
        />

        <h4 className="mt-5">Prices</h4>
        <Form.Range onChange={(e) => onFilter((prev) => ({
          ...prev, price: e.target.value
        }))} />
      </Form>

      <Button variant="info w-100 mt-3">Apply</Button>
    </>
  );
};

export default CouseraFilter;
