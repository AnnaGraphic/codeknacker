import { useState } from 'react';
import { Dropdown } from './Dropdown';
import './header.css';

export function Header () {
  // ----- dropdown -----
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className="headerLogo"><img src="logo.svg" alt="logo" /></div>
      <div className="headerTitle">Codeknacker</div>
      <Dropdown
        open={open}
        handleOpen={handleOpen}
      />
  </header>
  )
}