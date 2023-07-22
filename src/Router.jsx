import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./Pages/Homepage";

const Router = () => {
    const isLoggedIn = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn?<Homepage />:<Homepage/>,
    //   errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;