import './Navbar.css';
import { NavLink } from 'react-router-dom';

const NavLogo = require('./img/portugalese_logo.png');

function Navbar() {
    return(
            <nav id="navbar-wrapper">
                <div id="navbar">
                    <div id="nav-logo-container">
                            <NavLink exact to="/">
                                <img src={NavLogo} class="nav-logo-image"></img>
                            </NavLink>
                        </div>
                    
                    <div id="navbar-links">
                        <ul id="navbar-list">

                            <li class="nav-link">
                                <NavLink exact to="/MobileApps">
                                    Apps
                                </NavLink>
                            </li>

                            <li class="nav-link">
                            <NavLink exact to="/Books" class="nav-link">
                                    Books
                                </NavLink>
                            </li>

                            <li class="nav-link">
                            <NavLink exact to="/Websites" class="nav-link">
                                    Websites
                                </NavLink>
                            </li>

                            <li class="nav-link">
                            <NavLink exact to="/Contact" class="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                            <li class="nav-link">
                            <NavLink exact to="/Sitemap" class="nav-link">
                                    Sitemap
                                </NavLink>
                            </li>
                        </ul>
                        </div>
                </div>
            </nav>
    );
}

export default Navbar;