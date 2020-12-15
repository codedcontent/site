import React from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Badge, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = ({cartTotal}) => {
    const classes = useStyles();
    const location = useLocation();

    console.log(location);
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit" >
                <Toolbar>
                    <Typography component={Link} to='/' className={classes.title} variant="h6" color="inherit">
                    <img src={logo} alt="Meph Mart" height="25px" className={classes.image} />
                    Meph Mart
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' &&
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label = "Show cart items" color="inherit">
                            <Badge badgeContent={cartTotal} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
