import React from "react"
import {AiOutlineHome, AiFillClockCircle, AiOutlineComment, AiOutlineEnvironment} from "react-icons/ai"
import Button from '@mui/material/Button';

import "./Navbar.scss";


const Navbar = () => {


    return (
        <>
            <nav>
                <Button id="" className="navbar__button"><AiOutlineHome /></Button>
                <Button id="time" className="navbar__button"><AiFillClockCircle /></Button>
                <Button id="" className="navbar__button"><AiOutlineEnvironment /></Button>
                <Button id="" className="navbar__button"><AiOutlineComment /></Button>
            </nav>
            <div className="navbar__modal-card--time">
                <p>Tirsdag - Søndag</p>
                <p>15.00 - 20.00</p>
                <p>Mandag</p>
                <p>Stengt</p>
                <button className="modal-time--close">Lukk</button>
            </div>
        </>
    )
}

export default Navbar;