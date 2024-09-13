import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Product from "../pages/Product";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
    ],
  },
]);

const Router = ({ children }) => {
  return <RouterProvider router={routes}>{children}</RouterProvider>;
};

export default Router;
