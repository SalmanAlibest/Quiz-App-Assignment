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
import { login, signup } from "../data/actions";

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.fetchUser || null);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorFlag, setErrorFlag] = useState<boolean>(false);
  const _signup = () => {
    dispatch(signup({ name, email, password }));
    // dispatch(login({ email, password }));
  };

  useEffect(() => {
    console.log("Sign up", user);

    // if (Object.keys(user).length > 0) {
    //   history.push(generatePath(ROUTES.HOME));
    // }
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
            Signup
          </Typography>

          <Box>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.textAlignment}
            >
              Please Signup to continue.
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
                label={"Name"}
                value={name}
                placeholder="Enter valid email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                required={true}
              />
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
                  _signup();
                }}
              >
                Sign up
              </Button>
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

export default Signup;
