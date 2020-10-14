import React, {useState} from 'react';
import logo from '../../assets/img/logo.svg';
const Header = () => {

const [navOpen, toggleNav] = useState(false);

const onNavButtonClicked = () => {
  toggleNav((prev) => toggleNav(!prev))
}


  return(
    <header className='fixed-top header'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-none ">
          <a className="navbar-brand" href="/">
            <img src={logo} className='logo' alt='logo' />
          </a>
          <div className={`collapse navbar-collapse ${navOpen ? 'show' : '' }`} id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Relationships</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Requirements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Users</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          <button className="navbar-toggler" type="button" onClick={onNavButtonClicked} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </header>
    
  )
}

export default Header;