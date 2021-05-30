import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { generatePath, useHistory } from "react-router";
import { ROUTES } from "../routes";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../data/api";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.fetchUser || null);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#E69A8DFF" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            User Name: {user?.name}
          </Typography>
          {user?.isAdmin ? (
            <Button
              color="inherit"
              onClick={() => {
                history.push(generatePath(ROUTES.ADMIN));
              }}
            >
              Switch To Admin
            </Button>
          ) : (
            ""
          )}

          <Button
            color="inherit"
            onClick={() => {
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

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
}));

export default Header;
