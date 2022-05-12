import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='mw-100'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid d-flex flex-row">
          <p className='navbar-nav nav-link text-light'>Alkemy Challenge</p>
          <ul className='navbar-nav d-flex flex-row'>
            <li className='nav-item pe-4'><Link className='nav-link' to="/">Home</Link></li>
            <li className='nav-item pe-4'><Link className='nav-link' to="/list">List</Link></li>
            <li className='nav-item pe-4'><Link className='nav-link' to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header