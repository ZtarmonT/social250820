import React from 'react';
import ncss from '../navbar/navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className = {ncss.navbar}>
            <ul>
                <li>
                   <NavLink to="profile" activeClassName={ncss.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="dialogs" activeClassName={ncss.active}>Message</NavLink>
                </li>
                <li>News</li>
                <li>Music</li>
                <li>Setting</li>
            </ul>
        </div>
    );
        
    
}

export default Navbar;