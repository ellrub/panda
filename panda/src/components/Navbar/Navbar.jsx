import React, {useState} from "react"
import {AiOutlineHome, AiFillClockCircle, AiOutlineComment, AiOutlineEnvironment} from "react-icons/ai"

import "./Navbar.scss";

const Navbar = () => {
    const [active, setActive] = useState(false)
    return (
        <nav>
            <a href=""><AiOutlineHome onClick={() => setActive(true)} /></a>
            <a href=""><AiFillClockCircle onClick={() => setActive(true)} /></a>
            <a href=""><AiOutlineEnvironment onClick={() => setActive(true)} /></a>
            <a href=""><AiOutlineComment onClick={() => setActive(true)} /></a>
        </nav>
    )
}

export default Navbar;