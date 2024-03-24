import { createContext, useContext, useReducer } from "react";
import React from "react";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

function UserReducer(state, action) {
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
    case "setUserProfile":
      return {
        ...state,
        username: action.value.username,
        password: action.value.password,
      }

      case "setScore":
        console.log(action.value)
        return {
          ...state,
          score: action.value
        }

      case "setAvatar":
        return {
          ...state,
          avatar: action.value
        }
    default:
      break;
  }

  return state;
}

const initialState = {
  username: "",
  email: "",
  avatar: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg",
  password: "",
  isLoading: false,
  isLoggedIn: false,
  error: "",
  score: 0,
};

const UserContextProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
