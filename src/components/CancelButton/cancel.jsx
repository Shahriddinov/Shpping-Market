import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import "./style.scss";

export default function Cancel() {
    return (
        <Stack spacing={2} direction="row">
            <Button className="button" variant="contained"> <span className="icon"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>
        </Stack>
    );
}
