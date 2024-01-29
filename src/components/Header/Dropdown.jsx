import { Link } from "react-router-dom";
import { dropdownLinks } from "../../data/dropdown.js";
import BurgerSvg from "../../assets/burger.svg";
import { useUserContext } from "../../contexts/UserContext";

export function Dropdown({ open, handleOpen }) {
  const { dispatch } = useUserContext();

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
            <Link to='/'>
              <button className="logoutButton" onClick={() =>
                dispatch({
                  type: "logout",
                })
              }>logout</button>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

