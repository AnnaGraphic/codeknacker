import { useState } from 'react';
import { Dropdown } from './Dropdown';
import './header.css';
import { Link } from 'react-router-dom';

export function Header () {
  // ----- dropdown -----
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="headerLogo"><img src="logo.svg" alt="logo" /></div>
      <Link to='/' ><div className="headerTitle">Codeknacker</div> </Link>
      <Dropdown
        open={open}
        handleOpen={handleOpen}
      />
  </header>
  )
}