import {ClipLoader} from 'react-spinners';
import { LoginUser } from "./LoginUser";
import { useUserContext } from "../../contexts/UserContext";
import "./login.css";

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
        error: {
          ...state.error,
          [action.field]: action.value,
        },
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
    <div className="login">
      <div>
        {isLoading ? (
          <div className='spinner'>
            <ClipLoader color='yellow' size={70}/>
            </div>
            ) : isLoggedIn ? (
          <>
            <h1>Hello {username} !</h1>
            {""}
            <button onClick={() => dispatch({ type: "logout" })}>
              Log out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <h1>Sign in to your account</h1>
            {error && error.general && <p className="error">{error.general}</p>}
            <label htmlFor="username">Username<sup>*</sup></label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.currentTarget.value,
                })
              }
            />
            <label htmlFor="password">Password <sup>*</sup></label>
            <input
              type="password"
              id="password"
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
