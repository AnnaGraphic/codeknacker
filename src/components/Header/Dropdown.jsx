import { Link } from "react-router-dom";
import { dropdownLinks } from "../../data/dropdown.js";
import BurgerSvg from "../../assets/burger.svg";

export function Dropdown({ open, handleOpen }) {
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
                <Link to={link.path} key={index}>
                  {link.path}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
