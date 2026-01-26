import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { auth } from "../services/auth.service";

const Register = () => {
  const [registerForm, setRegisterForm] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here

    const promise = auth.register(registerForm);

    promise
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to register user");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log("User registered successfully:", data);
        // You can redirect the user to the login page or home page here
        return data;
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };


  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegisterForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <Container>
      <Row className="justify-content-center">
        {/* Registration form components will go here */}
        <Col
          md={{ span: 6, offset: 3 }}
          className="bg-light py-5 px-5 mt-4 rounded-4 shadow"
        >
          <h1 className="text-center">Register Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="username"
                placeholder="Your name"
                required
                value={registerForm.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control py-2"
                id="email"
                placeholder="admin@example.com"
                required
                value={registerForm.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control py-2"
                id="password"
                placeholder="*******"
                required
                value={registerForm.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control py-2"
                id="confirmPassword"
                placeholder="*******"
                required
                value={registerForm.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-3 mt-3">
              Register
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
