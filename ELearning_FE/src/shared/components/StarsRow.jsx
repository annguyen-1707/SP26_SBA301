import React from "react";
import { StarFill } from "react-bootstrap-icons";

/**
 * StarsRow
 * @param {number} value  số sao được tô (0–5)
 * @param {number} size   kích thước icon
 */
function StarsRow({ filled = 0 }) {
  return (
    <span className="d-inline-flex align-items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarFill
          key={i}
          className={i < filled ? "text-warning" : "text-muted"}
          size={14}
        />
      ))}
    </span>
  );
}

export default StarsRow;
