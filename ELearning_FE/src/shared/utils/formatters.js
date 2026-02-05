// src/utils/formatters.js
export const formatVND = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "0 ₫";

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(Number(value));
};
