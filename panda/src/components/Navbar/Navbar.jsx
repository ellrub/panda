import React from "react"
import {AiOutlineHome} from "react-icons/ai"
import Button from '@mui/material/Button';

import "./Navbar.scss";
import ModalTime from "../Modal/ModalTime"
import ModalContact from "../Modal/ModalContact"
import ModalLocation from "../Modal/ModalLocation";

const Navbar = () => {


    return (
        <nav>
            <Button id="" className="navbar__button" size="small"><AiOutlineHome /></Button>
            <ModalTime />
            <ModalLocation />
            <ModalContact />
        </nav>
    )

    


    // return (
    //     <>
    //         <nav>
    //             <Button id="" className="navbar__button"><AiOutlineHome /></Button>
    //             <Button id="time" className="navbar__button"><AiFillClockCircle /></Button>
    //             <Button id="" className="navbar__button"><AiOutlineEnvironment /></Button>
    //             <Button id="" className="navbar__button"><AiOutlineComment /></Button>
    //         </nav>
    //         <div className="navbar__modal-card--time">
    //             <p>Tirsdag - Søndag</p>
    //             <p>15.00 - 20.00</p>
    //             <p>Mandag</p>
    //             <p>Stengt</p>
    //             <Button className="modal-time--close"><CloseOutlinedIcon /></Button>
    //         </div>
    //     </>
    // )
}

export default Navbar;