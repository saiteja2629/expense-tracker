import React from "react";
import axios from "axios";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { MyProvider } from "./MyContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyExpenses from "./pages/MyExpenses";
import Profile from "./pages/Profile";

import "./App.css";

const App = () => {
  const isTokenValid = async (token) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/validate-token",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response;
    } catch (error) {
      if (sessionStorage.getItem("token")) {
        sessionStorage.clear();
      }
      return false;
    }
  };

  const isAuthenticated = async () => {
    if (sessionStorage.getItem("token") !== null) {
      if (await isTokenValid(sessionStorage.getItem("token"))) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const requireAuth = async () => {
    if (await isAuthenticated()) {
      return null;
    }
    return redirect("/login");
  };

  const isAlreadyLoggedIn = async () => {
    if (await isAuthenticated()) {
      return redirect("/");
    }
    return null;
  };

  const requireBoth = async () => {
    if ((await requireAuth()) && (await isAlreadyLoggedIn())) {
      return null;
    }
    return redirect("/login");
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: requireAuth,
    },
    {
      path: "/signup",
      element: <Signup />,
      loader: isAlreadyLoggedIn,
    },
    {
      path: "/login",
      element: <Login />,
      loader: isAlreadyLoggedIn,
    },
    {
      path: "/my-expenses",
      element: <MyExpenses />,
      loader: requireAuth,
    },
    {
      path: "/profile",
      element: <Profile />,
      loader: requireAuth,
    },
    {
      path: "/logout",
      element: <Login />,
      loader: requireBoth,
    },
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
      <MyProvider>
        <RouterProvider router={routes} />
      </MyProvider>
    </div>
  );
};

export default App;
