import { AuthStatesContext } from "@/app/provider/AuthProvider";
import React, { useContext } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const PublicHeader = () => {
  const { userContext } = useContext(AuthStatesContext);
<<<<<<< HEAD
  const customNavLink = (isActive) => "nav-link" + (({ isActive }) ? "nav-link bottom-black border-bottom border-3" : "text-dark")
=======
  const navLinkCutom = ({isActive}) => "nav-link " + (isActive? "border-bottom border-black text-info": " text-gray")

>>>>>>> d0267c3c92f68a7d92447dcb62ff1fe56be0c8f9
  return (
    <div className="container py-2">
      <nav className="navbar navbar-expand-lg bg-white">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold d-flex align-items-center" href="#">
          E-learning
          <span
            className="ms-1 rounded-circle"
            style={{
              width: 6,
              height: 6,
              backgroundColor: "#6f4ef6",
              display: "inline-block",
            }}
          ></span>
        </NavLink>

        {/* Button toggle mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
<<<<<<< HEAD
              <NavLink to="/home" className={customNavLink} href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/home/course" className={customNavLink} href="#">
=======
              <NavLink to="/" end className={navLinkCutom}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className={navLinkCutom}>
>>>>>>> d0267c3c92f68a7d92447dcb62ff1fe56be0c8f9
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <NavLink className={customNavLink} href="#">
=======
              <NavLink to="/mentor" className={navLinkCutom}>
>>>>>>> d0267c3c92f68a7d92447dcb62ff1fe56be0c8f9
                Mentor
              </NavLink>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <NavLink className={customNavLink} href="#">
=======
              <NavLink to="/group" className={navLinkCutom}>
>>>>>>> d0267c3c92f68a7d92447dcb62ff1fe56be0c8f9
                Group
              </NavLink>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <NavLink className={customNavLink} href="#">
=======
              <NavLink to="/testimonial" className={navLinkCutom}>
>>>>>>> d0267c3c92f68a7d92447dcb62ff1fe56be0c8f9
                Testimonial
              </NavLink>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <NavLink className={customNavLink} href="#">
=======
              <NavLink to="/docs" className={navLinkCutom}>
>>>>>>> d0267c3c92f68a7d92447dcb62ff1fe56be0c8f9
                Docs
              </NavLink>
            </li>
          </ul>

          {/* Buttons */}
          {!userContext ? (
            <div className="d-flex gap-2">
              <Link className="btn text-white px-4" style={{ backgroundColor: "#6f4ef6" }} to="/login">Sign In</Link>

              <button
                className="btn px-4"
                style={{
                  backgroundColor: "#ede9fe",
                  color: "#6f4ef6",
                }}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <Nav variant="pills" activeKey="1" onSelect="">
<NavDropdown title={userContext.name} id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </div>
      </nav>
    </div>
  );
};

export default PublicHeader;