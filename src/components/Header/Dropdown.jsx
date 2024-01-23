import { Link } from 'react-router-dom';
import { dropdownLinks } from '../../data/dropdown.js'

export function Dropdown({ open, handleOpen }) {
  return (
    <div className="dropdown">
      <button onClick={handleOpen}>
        X
      </button>
      {open && (
        <div>
          <ul className="menu">
            {dropdownLinks.map((link, index) => {
              console.log(link.path);
              return (
              <Link to={link.path} key={index}>{link.path}</Link>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}