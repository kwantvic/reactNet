import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://banner2.cleanpng.com/20180513/fpq/kisspng-royalty-free-logo-dragon-5af7c7407136a9.1946411915261878404637.jpg" />
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
