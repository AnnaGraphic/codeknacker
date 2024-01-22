import { useState } from "react";
import { LoginUser } from "./LoginUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      await LoginUser({ username, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError("Invalid username or password. Please try again.");
    }
    setIsLoading(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <>
            <h1>Hello {username}!</h1>{" "}
            <button onClick={() => setIsLoggedIn(false)}>Log out</button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
