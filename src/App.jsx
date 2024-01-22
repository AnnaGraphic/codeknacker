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
import { Leaderboard } from "./components/Leaderboard/Leaderboard.jsx";
import { Game } from "./components/Game/Game.jsx";

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
          path: 'game',
          element: isLoggedIn ? <Game /> : <Login/>,
        },
        {
          path: 'leaderboard',
          element: <Leaderboard />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>loading..</p>} />;
}

export default App;
