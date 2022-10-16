import React from "react"
import {AiOutlineComment} from "react-icons/ai"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import "./ModalContact.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ModalContact = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}><AiOutlineComment /></Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                <Typography id="modal__time-title">
                    Kontakt Oss
                </Typography>
                <Typography id="modal__time-description" sx={{ mt: 2 }}>
                    TLF: 458 14 990<br/>post@pandamat.no
                </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalContact;