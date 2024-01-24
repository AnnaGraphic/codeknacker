import { LoginUser } from "./LoginUser";
import { useUserContext } from "../../contexts/UserContext";

const Login = () => {
  const { userState, dispatch } = useUserContext();
  const { username, password, isLoading, isLoggedIn, error } = userState;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await LoginUser({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({
        type: "error",
        field: "general",
        value: "Invalid username or password. Please try again.",
      });
    }
  };

  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <>
            <h1>Hello {username} !</h1>
            {""}
            <button onClick={() => dispatch({ type: "logout" })}>
              Log out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && error.general && <p className="error">{error.general}</p>}
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.currentTarget.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.currentTarget.value,
                })
              }
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
