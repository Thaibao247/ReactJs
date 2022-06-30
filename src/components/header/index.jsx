import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import "./styles.scss"
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="nav-wrapper">
            <div className="logo">
                <Link to="/menus">        
                    Project Basic
                </Link>
            </div>
            <div className="nav-menu">
                <NavLink to="/menus">
                        <Button color="inherit">Menu</Button>
                </NavLink>
                <NavLink to="/todos">
                        <Button color="inherit">Todo</Button>
                </NavLink>
                <NavLink to="/albums">
                        <Button color="inherit">Album</Button>
                </NavLink>
                <NavLink to="/login">
                        <Button color="inherit">Login</Button>
                </NavLink>
                <NavLink to="/register">
                        <Button color="inherit">Register</Button>
                </NavLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
