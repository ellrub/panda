import React from "react"
import {AiOutlineEnvironment} from "react-icons/ai"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import "./ModalLocation.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};


const ModalLocation = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}><AiOutlineEnvironment /></Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style} className="modal__location-box">
                    <Typography id="modal__location-title">
                        Her Finner Du Oss
                    </Typography>
                    <Typography id="modal__location-description" sx={{ mt: 2 }}>
                        Sandslihaugen 10<br/>5254 Sandsli
                    </Typography>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe 
                                width="320" 
                                height="400" 
                                id="gmap_canvas" 
                                src="https://maps.google.com/maps?q=panda%20mat%20sandsli&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                                frameborder="0" 
                                scrolling="no" 
                                marginheight="0" 
                                marginwidth="0">
                            </iframe>
                                
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalLocation;