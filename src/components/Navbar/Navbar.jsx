import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return <nav className={style.nav}>
        <div>
            <a href="/profile">Profile</a>
        </div>
        <div>
            <a href="/dilogs">Message</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;

