import React from 'react';

import { AddCircle, ListAlt } from '@material-ui/icons';
// import { Menu as MenuIcon } from "@material-ui/icons";


import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
// import { useFirebase } from './Firebase';



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    activeLink: {
        backgroundColor: 'red !important',
        '&:hover': {
            backgroundColor: 'red !important',
        },
    },
}));

const SideNav = () => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    // const firebase = useFirebase();

    // const handleLogout = () => {
    //     firebase.logout().then(() => {
    //         console.log('User logged out successfully!');
    //     }).catch(error => {
    //         console.error(error);
    //     });
    // };
    // const [open, setOpen] = React.useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };
    return (
        <div>

            <Drawer
                variant="permanent"
                anchor="left"
            >
                <List component="nav" className={classes.root}>
                    <ListItem
                        button
                        component={RouterLink}
                        to="/addStudent"
                        selected={selectedIndex === 0}
                        onClick={event => handleListItemClick(event, 0)}
                        className={selectedIndex === 0 ? classes.activeLink : ''}
                    >
                        <ListItemIcon>
                            <AddCircle />
                        </ListItemIcon>
                        <ListItemText primary="Add Student" />
                    </ListItem>
                    <ListItem
                        button
                        component={RouterLink}
                        to="/manage"
                        selected={selectedIndex === 1}
                        onClick={event => handleListItemClick(event, 1)}
                        className={selectedIndex === 1 ? classes.activeLink : ''}
                    >
                        <ListItemIcon>
                            <ListAlt />
                        </ListItemIcon>
                        <ListItemText primary="Manage Students" />
                    </ListItem>
                </List>
                <Button>
                    Logout
                </Button>
            </Drawer>
        </div>
    );
};

export default SideNav;