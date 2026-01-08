import React from "react";
import './CardCousera.css';

export const CardCousera = ({ course }) => {
    return (
        <div className="card h-100 border-0 shadow-sm course-card">
            {/* Image wrapper */}
            <div className="position-relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="card-img-top"
                />

                {/* Badge */}
                <span className="badge rounded-circle bg-primary text-white course-badge">
                    {course.badge}
                </span>
            </div>

            <div className="card-body d-flex flex-column">
                <h5 className="fw-bold">{course.title}</h5>

                <p className="text-muted mb-2">{course.author}</p>

                {/* Rating + price */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-1">
                        <span className="fw-bold text-danger">
                            {course.rating}
                        </span>
                        <span className="text-warning">
                            {'★'.repeat(Math.round(course.rating))}
                            {'☆'.repeat(5 - Math.round(course.rating))}
                        </span>
                    </div>
                    <span className="fw-bold fs-5">${course.price}</span>
                </div>

                <hr className="mt-auto" />

                {/* Footer */}
                <div className="d-flex justify-content-between text-muted small">
                    <div className="d-flex align-items-center gap-1">
                        📘 <span>{course.classes} classes</span>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                        👥 <span>{course.students} students</span>
                    </div>
                </div>
            </div>
        </div>

    );
}