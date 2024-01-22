import "./App.css";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import  Login  from "./components/authentication/Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <div />,
        },
        {
          path: "login",
          element: isLoggedIn ? <Navigate to="/" /> : <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>loading..</p>} />;
}

export default App;
