import React from "react";

import classes from "./Header.module.css";
import headerImg from "../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.mainImage}>
        <img src={headerImg} alt="Images about meals" />
      </div>
    </>
  );
};

export default Header;
