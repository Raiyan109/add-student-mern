import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core';
import EditStudentForm from './EditStudentForm';
import ViewStudentForm from './ViewStudentForm';
import ViewIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
    root: {
        marginLeft: '250px'
    },
    table: {
        minWidth: 650,
    },

});
const ManageStudents = () => {
    const classes = useStyles();
    const [students, setStudents] = useState([]);
    const [openView, setOpenView] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState({});

    useEffect(() => {
        // Get the list of students from your API or database
        // Example:
        fetch('/api/students')
            .then(res => res.json())
            .then(data => {
                setStudents(data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleViewOpen = student => {
        setSelectedStudent(student);
        setOpenView(true);
    };

    const handleViewClose = () => {
        setOpenView(false);
    };

    const handleEditOpen = student => {
        setSelectedStudent(student);
        setOpenEdit(true);
    };

    const handleEditClose = () => {
        setOpenEdit(false);
    };

    const handleDeleteOpen = student => {
        setSelectedStudent(student);
        setOpenDelete(true);
    };

    const handleDeleteClose = () => {
        setOpenDelete(false);
    };

    const handleDelete = () => {
        // Delete the selected student from your API or database
        // Example:
        fetch(`/api/students/${selectedStudent.id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.ok) {
                    setStudents(students.filter(student => student.id !== selectedStudent.id));
                } else {
                    throw new Error('Failed to delete student');
                }
            })
            .catch(error => console.error(error));

        handleDeleteClose();
    };

    return (
        <div style={{ marginLeft: '250px' }}>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Roll</TableCell>
                            <TableCell>View/Edit/Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>Roll no</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleViewOpen(student)}><ViewIcon /></Button>
                                    <Button onClick={() => handleEditOpen(student)}><EditIcon /></Button>
                                    <Button onClick={() => handleDeleteOpen(student)}><DeleteIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={openView} onClose={handleViewClose}>
                <DialogTitle>View Student</DialogTitle>
                <ViewStudentForm student={selectedStudent} />
            </Dialog>
            <Dialog open={openEdit} onClose={handleEditClose}>
                <DialogTitle>Edit Student</DialogTitle>
                <EditStudentForm student={selectedStudent} />
            </Dialog>
            <Dialog
                open={openDelete}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose}>Cancel</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ManageStudents;