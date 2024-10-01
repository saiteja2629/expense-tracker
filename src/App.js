import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import "./App.css";

const App = () => {
  const routes = createBrowserRouter([
    {
      // path: "/",
      // element: <RootLayout />,
      // loader: requireAuth,
      // children: [
      //   {
      //     index: true,
      //     element: <Home />,
      //     loader: requireAuth,
      //   },
      //   {
      //     path: "/categories",
      //     element: <About />,
      //     loader: requireAuth,
      //   },
      //   {
      //     path: "/groups",
      //     element: <Groups />,
      //     loader: requireAuth,
      //   },

      //   {
      //     path: "/topics",
      //     element: <Topics />,
      //     loader: requireAuth,
      //   },
      // ],
    },
    {
      path: "/signup",
      element: <Signup />,
      // loader: isAlreadyLoggedIn,
    },
    {
      path: "/login",
      element: <Login />,
      // loader: isAlreadyLoggedIn,
    },
    // {
    //   path: "/logout",
    //   element: <Login />,
    //   loader: requireBoth,
    // },
    // {
    //   path: "/not-found",
    //   element: <Notfound />,
    // },
    // {
    //   path: "*",
    //   element: <Navigate to="/not-found" />,
    // },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
