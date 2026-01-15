import { useRoutes } from "react-router-dom";
import publicRoutes from "./public.routes";

const routes = [...publicRoutes];

export const AppRoutes = () => {
  return useRoutes(routes);
};
