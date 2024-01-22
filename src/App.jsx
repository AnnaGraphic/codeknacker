import './App.css'
import{ useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout/Layout.jsx';
import { Start } from './components/TESTS/Start.jsx';
import { Login } from './components/TESTS/Login.jsx';

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
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Start />,
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

  return (
      <RouterProvider router={router} fallbackElement={<p>loading..</p>} />
  )
}

export default App
