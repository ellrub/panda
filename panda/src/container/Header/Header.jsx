import React from "react";
import {AiFillFacebook, AiFillInstagram} from "react-icons/ai"

import {images} from "../../constants";
import "./Header.scss";

const Header = () => {
    return (
        <header id="home">
            <div className="header__container-logo">
                <img src={images.panda} alt="Panda Mat Logo" className="header__logo"/>
            </div>
            <div className="header__container-links">
                <a 
                    href="tel:+4745814990"
                    className="header__container-link--call header__link">
                        <i className="fa-solid fa-phone"></i><br/>Ring & Bestill
                </a>
                <a  href="#menu"
                    className="header__container-link--menu header__link">
                        <i className="fa-solid fa-utensils"></i><br/>Meny
                </a>
                <div className="header__socialmedia-links">
                    <a  rel="noreferrer" 
                        href="https://www.facebook.com/pandamatsandsli/" 
                        target="_blank"><AiFillFacebook /></a>
                    <a  rel="noreferrer" 
                        href="https://www.instagram.com/pandamatsandsli/" 
                        target="_blank"><AiFillInstagram /></a>
                </div>
            </div>

        </header>
    )
}

export default Header;