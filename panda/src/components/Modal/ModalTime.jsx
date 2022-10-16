import React from "react"
import {AiFillClockCircle} from "react-icons/ai"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import "./ModalTime.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};


const ModalTime = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}><AiFillClockCircle /></Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} className="modal__time-box">
                <Typography id="modal__time-title">
                    Åpningstider
                </Typography>
                <Typography id="modal__time-description" sx={{ mt: 2 }}>
                    Tirsdag - Søndag<br/>15.00 - 20.00<br/>Mandag<br/>STENGT
                </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalTime;