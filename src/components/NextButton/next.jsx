import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import "./style.scss";
import CancelOutlinedIcon from "@mui/material/SvgIcon/SvgIcon";

export default function Next() {
    return (
        <Stack spacing={2} direction="row">

            <Button className="button" href="/qualification" style={{backgroundColor: "#0FBE7B"}} variant="contained"> <span className="icon"><CheckCircleOutlineOutlinedIcon fontSize="small"/></span> Продолжить</Button>
        </Stack>
    );
}