import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 804,
    height: 270,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt:10,
    borderRadius:4
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}><span style={{color:'#FE346E', width:'50%'}}><HighlightOffIcon/></span></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:"center", color:"#FE346E"}}>
                        Удалить этот файл?
                    </Typography>
                    <Box style={{display:'flex', justifyContent:'space-between', width:402, marginTop:50, marginLeft:'auto', marginRight:'auto'}}>
                        <Button onClick={handleClose} style={{backgroundColor:"#2B63C0", color:"white", width:191, height: 48}}><span style={{color:'#fff', marginRight:15.67}}><HighlightOffIcon/></span>Отменить</Button>
                        <Button onClick={handleClose} style={{backgroundColor:"#FE346E", color:"white", width:191, height: 48}}><span style={{color:'#fff', marginRight:15.67}}><CheckCircleOutlineOutlinedIcon/></span>Удалить</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}