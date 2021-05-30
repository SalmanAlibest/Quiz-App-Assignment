import { Typography, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useHistory } from "react-router";
import { getCounter } from "../data/actions";
import { ROUTES } from "../routes";

const Result = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const correctCounter = useSelector((state: any) => state.fetchCounter);

  return (
    <div className={classes.layout}>
      <div style={{ marginTop: 100 }}></div>
      <Card className={classes.cardClass}>
        <Typography
          variant="h5"
          align="center"
          style={{ color: "#5F4B8BFF", fontWeight: "bold" }}
        >
          Salman Ali
        </Typography>

        <Typography
          variant="subtitle2"
          align="center"
          style={{ color: "#5F4B8BFF" }}
        >
          Your Score is : <b>{correctCounter}</b>
        </Typography>
      </Card>
      <Button
        variant="contained"
        fullWidth
        style={{ marginTop: 10 }}
        onClick={() => {
          dispatch(getCounter(0));

          history.push(generatePath(ROUTES.HOME));
        }}
      >
        Attemp Again
      </Button>
    </div>
  );
};
const useStyles = makeStyles(
  (theme: {
    spacing: (arg0: number) => number;
    breakpoints: { up: (arg0: number) => number };
  }) => ({
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },

    cardClass: {
      padding: 20,
      backgroundColor: "#E69A8DFF",
    },
  })
);
export default Result;
