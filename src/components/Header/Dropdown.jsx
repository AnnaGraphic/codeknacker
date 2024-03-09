import { Link } from "react-router-dom";
import { dropdownLinks } from "../../data/dropdown.js";
import BurgerSvg from "../../assets/burger.svg";
import { useUserContext } from "../../contexts/UserContext";
import { logout } from "./logout.js";

export function Dropdown({ open, handleOpen }) {
  const { dispatch, userState } = useUserContext();
  const { isLoggedIn } = userState;

  const handleLogout = async () => {
    try {
      await logout();
      dispatch({ type: "logout" });
    } catch (error) {
      dispatch({
        type: "error",
        field: "general",
        value: "logout failed",
      });
      console.error(error.message);
    }
  };

  return (
    <div className="dropdown">
      <button className="burger-menu" onClick={handleOpen}>
        <img src={BurgerSvg} alt="burger" />
      </button>
      {open && (
        <div className="dropdown-content">
          <ul className="menu">
            {dropdownLinks.map((link, index) => {
              console.log(link.path);
              return (
                <Link to={`/${link.path}`} key={index} onClick={handleOpen} >
                  {link.path}
                </Link>
              );
            })}
            { isLoggedIn && (<Link to='/'>
              <button className="logoutButton" onClick={handleLogout}>logout</button>
            </Link> )}
          </ul>
        </div>
      )}
    </div>
  );
}

