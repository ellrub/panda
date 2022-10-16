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
    transform: 'translate(-50%, -50%)'
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
                <Box sx={style} className="modal__contact-box">
                <Typography id="modal__contact-title">
                    Kontakt Oss
                </Typography>
                <div className="modal__contact-descript-box">
                    <Typography id="modal__contact-description" sx={{ mt: 2 }}>
                        <a href="tel:+4745814990">TLF: 458 14 990</a>
                    </Typography>
                    <Typography id="modal__contact-description" sx={{ mt: 2 }}>
                        <a href="mailto:post@pandamat.no">post@pandamat.no</a>
                    </Typography>
                </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalContact;