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
            <Button href="#home" className="navbar__button" size="small"><AiOutlineHome /></Button>
            <ModalTime />
            <ModalLocation />
            <ModalContact />
        </nav>
    )
}

export default Navbar;