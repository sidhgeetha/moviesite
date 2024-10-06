import React from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./components/LandingPage";

import RegisterPage from "./components/RegisterPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/landingpage", // Corrected path for LandingPage
    element: <LandingPage />, // Ensure this points to LandingPage
  },
]);

    // path: "/",

    // element: <LandingPage />,

    // children: [
    //   {
    //     index: true,

    //     element: <RegisterPage />,
    //   },
    // ],



const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
