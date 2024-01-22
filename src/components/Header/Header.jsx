import './header.css';

export function Header () {
  return (
    <header className="header">
    <div className="headerLogo"><img src="/public/logo.svg" alt="logo" /></div>
    <div className="headerTitle">Codeknacker</div>
  </header>
  )
}