import React from "react";
import {NavLink} from "react-router-dom";


function Header() {
    return(
        <header>
            <nav>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active" className="nav-link">
                About Vannak
                </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" activeClassName="active" className="nav-link">
                Projects
                </NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://1drv.ms/b/s!AqPS_UBKccTmnZ4DL6E53a7_gm_hIQ?e=LihNWG" target="_blank">Resume</a>
                </li>
                </ul>
        </nav>
        </header>
    )
}
export default Header;