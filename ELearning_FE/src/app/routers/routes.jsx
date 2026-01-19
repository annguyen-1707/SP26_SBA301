import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.routes";

const routes = createBrowserRouter([...publicRoutes, ]);

// export const AppRoutes = () => {
//   return useRoutes(routes);
// };

export default routes;
