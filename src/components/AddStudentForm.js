import React from 'react';
// import { TextFields } from '@mui/icons-material';
// import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const AddStudentForm = () => {

    const classes = useStyles();

    const [classValue, setClassValue] = React.useState('');
    const [divisionValue, setDivisionValue] = React.useState('');

    const handleClassChange = (event) => {
        setClassValue(event.target.value);
    };

    const handleDivisionChange = (event) => {
        setDivisionValue(event.target.value);
    };

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="middle-name"
                    label="Middle Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="class-select-label">Class</InputLabel>
                    <Select
                        labelId="class-select-label"
                        id="class-select"
                        value={classValue}
                        onChange={handleClassChange}
                    >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                            <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="division-select-label">Division</InputLabel>
                    <Select
                        labelId="division-select-label"
                        id="division-select"
                        value={divisionValue}
                        onChange={handleDivisionChange}
                    >
                        {['A', 'B', 'C', 'D', 'E'].map((letter) => (
                            <MenuItem key={letter} value={letter}>{letter}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    id="roll-number"
                    label="Roll Number"
                    type="number"
                    inputProps={{ min: "0", max: "99", step: "1" }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="address-line-1"
                    label="Address Line 1"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
            </form>
        </div>
    );
};

export default AddStudentForm;