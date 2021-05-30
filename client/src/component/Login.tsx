import React, { useEffect, useState } from "react";
import { useHistory, generatePath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Box,
  Typography,
  makeStyles,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ROUTES } from "../routes";
import { login } from "../data/actions";

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.fetchUser || null);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorFlag, setErrorFlag] = useState<boolean>(false);
  const _login = () => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (user.length > 0) {
      history.push(generatePath(ROUTES.HOME));
    } else {
      setErrorFlag(true);
    }
  }, [user]);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
      >
        <Box pt={6} pb={10} px={4}>
          <Typography
            gutterBottom
            variant="h4"
            className={classes.textAlignment}
          >
            Login
          </Typography>

          <Box>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.textAlignment}
            >
              Please login to continue.
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height={280}
              mt={3}
              width={350}
            >
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                label={"Email"}
                value={email}
                placeholder="Enter valid email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required={true}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                label={"Password"}
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter valid password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  _login();
                }}
              >
                Login
              </Button>
              <div className={classes.sideDiv}>
                <Typography
                  className="textField"
                  style={{ fontSize: 15, textDecorationLine: "underline" }}
                  onClick={() => {
                    history.push(generatePath(ROUTES.SIGNUP));
                  }}
                >
                  Create Account
                </Typography>
              </div>{" "}
              {errorFlag === true ? (
                <Typography variant="body2" style={{ color: "red" }}>
                  Incorrect Email or password!!
                </Typography>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
const useStyles = makeStyles(() => ({
  textAlignment: {
    textAlign: "center",
  },
  sideDiv: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
}));

export default Login;
