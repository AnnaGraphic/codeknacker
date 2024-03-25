import "./App.css";
import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Game from "./components/Game/Game";
import { Layout } from "./components/Layout/Layout.jsx";
import { Leaderboard } from "./components/Leaderboard/Leaderboard.jsx";
import Login from "./components/authentication/Login";
import { Profile } from "./components/Profile/Profile.jsx";
import Start from "./components/Start/Start";
import { Register } from "./components/authentication/Register";
import { getTopTen } from "./components/Leaderboard/getTopTen.js";
import { useUserContext } from "./contexts/UserContext.jsx";

function App() {
  const { userState } = useUserContext();
  const { isLoggedIn } = userState;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Start />,
        },
        {
          path: "game",
          element: isLoggedIn ? <Game /> : <Login />,
        },
        {
          path: "leaderboard",
          element: <Leaderboard />,
          //vs useEffect
          loader: async () => {
            return getTopTen();
          }
        },
        {
          path: "register/",
          element: <Register />
        },
        {
          path: `profile`,
          element: isLoggedIn ? <Profile /> : <Login />,
        },
        {
          //TODO: implement redirect in component
          path: "login",
          element: <Login/>,
        },
        {
          path: "*",
          element: (
            <div style={{ textAlign: "center", fontSize: "2em" }}>404</div>
          ),
        },
      ],
    },
  ], {basename: import.meta.env.DEV ? "/" : '/codeknacker/'});

  return <RouterProvider router={router} fallbackElement={<p>loading..</p>} />;
}

export default App;
