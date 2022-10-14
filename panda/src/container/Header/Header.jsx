import React from "react";

import {images} from "../../constants";
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <div className="header__container-logo">
                <img src={images.panda} alt="Panda Mat Logo" className="header__logo"/>
            </div>
            <div className="header__container-links">
                <a 
                    className="header__container-link--call header__link">
                        <i className="fa-solid fa-phone"></i><br/>Ring & Bestill
                </a>
                <a 
                    className="header__container-link--menu header__link">
                        <i className="fa-solid fa-utensils"></i><br/>Meny
                </a>
            </div>

        </header>
    )
}

export default Header;