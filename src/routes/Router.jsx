import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hi, </div>,
  },
]);

const Router = ({ children }) => {
  return <RouterProvider router={routes}>{children}</RouterProvider>;
};

export default Router;
