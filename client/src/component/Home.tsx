import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { generatePath, useHistory } from "react-router";
import { ROUTES } from "../routes";
import Card from "./Card";
import Header from "./Header";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [counter, setCounter] = useState<number>(0);
  const question = useSelector((state: any) => state.fetchQuestion);
  const _updateCounter = (value: number) => {
    if (counter < question.length - 1) {
      setCounter(counter + 1);
    } else {
      history.push(generatePath(ROUTES.RESULT));
    }
  };

  return (
    <>
      <Header />
      <div className={classes.layout}>
        <div style={{ height: 100 }}></div>
        <Typography variant="h5" align="center" style={{ marginBottom: 10 }}>
          Question {counter <= 9 ? counter : 10}/{question.length}
        </Typography>

        <Card
          options={question[counter]?.options}
          answer={question[counter]?.answer}
          question={question[counter]?.question}
          updateCounter={_updateCounter}
        />
      </div>
    </>
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
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  })
);
export default Home;
