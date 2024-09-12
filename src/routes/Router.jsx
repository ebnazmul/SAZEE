import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
]);

const Router = ({ children }) => {
  return <RouterProvider router={routes}>{children}</RouterProvider>;
};

export default Router;
