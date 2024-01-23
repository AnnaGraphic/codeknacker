import { useReducer } from "react";
import { LoginUser } from "./LoginUser";

function LoginReducer(state, action) {
  switch (action.type) {
    case "field":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "login":
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: "",
      };

    case "success":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "error":
      return {
        ...state,
        isLoading: false,
        error:{
          ...state.error,
        [action.field]: action.value,
        }
      };

    case "logout":
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "",
      };

    default:
      break;
  }

  return state;
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  isLoggedIn: false,
  error: "",
};

const Login = () => {
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const { username, password, isLoading, isLoggedIn, error } = state;

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
