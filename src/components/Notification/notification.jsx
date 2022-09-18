import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import "./style.scss";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Notification() {
    return (
        <Badge color="primary" variant="dot">
            <NotificationsNoneIcon style={{color:"#2B63C0"}}/>
        </Badge>
    );
}
