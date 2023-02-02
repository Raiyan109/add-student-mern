import { TextField } from '@mui/material';
import React from 'react';

const ViewStudentForm = ({ student }) => {
    return (
        <form>
            <TextField
                label="Name"
                // value={student.name}
                disabled
                fullWidth
                margin="normal"
            />
            <TextField
                label="Class"
                // value={student.email}
                disabled
                fullWidth
                margin="normal"
            />
            <TextField
                label="Roll"
                // value={student.email}
                disabled
                fullWidth
                margin="normal"
            />

        </form>
    );
};

export default ViewStudentForm;