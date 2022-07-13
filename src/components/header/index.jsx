import React from "react";
import { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { Link, NavLink } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Register from "../../features/Auth/components/Register";
import { ThemeContext } from "../../features/Todo/ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const pages = [
  {
    name: "cart",
    url: "/cart",
  },
  {
    name: "Menu",
    url: "/menus",
  },
  {
    name: "Todo",
    url: "/todos",
  },
  {
    name: "Album",
    url: "/albums",
  },
  // {
  //   name: 'Login',
  //   url: '/login'
  // },
  // {
  //   name:'Register',
  //   url:'/register'
  // }
];

export default function ButtonAppBar() {
  const context = useContext(ThemeContext);

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <AcUnitIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/shopping">
              TNTB
            </Link>
          </Typography>
          {context.totalCart}
          {pages.map((item) => (
            <NavLink to={item.url} className={classes.link}>
              {" "}
              <Button color="inherit">{item.name}</Button>
            </NavLink>
          ))}
          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        disableBackdropClick
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
