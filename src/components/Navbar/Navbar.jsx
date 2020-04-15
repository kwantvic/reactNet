import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={style.nav}>
        <div>
            <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" activeClassName={style.activeLink}>Message</NavLink>
        </div>
        <div>
            <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
        </div>
        <div>
            <NavLink to="/news" activeClassName={style.activeLink}>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;

