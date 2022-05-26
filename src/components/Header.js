import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <header className="mw-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex flex-row">
          <p className="navbar-nav nav-link text-light">React - pre-challenge</p>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item pe-4"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item pe-4"><Link className="nav-link" to="/list">List</Link></li>
            <li className="nav-item pe-4"><Link className="nav-link" to="/favorites">Favorites</Link></li>
          </ul>
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}

export default Header