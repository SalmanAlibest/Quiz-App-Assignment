import "../App.css";
import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCounter } from "../data/actions";
interface optionProps {
  option: string;
  answer: string;
  selectedAnswer: (val: string) => void;
  index: number;
}
const Option: React.FC<optionProps> = ({
  option,
  answer,
  selectedAnswer,
  index,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [matchAnswer, setMatchAnswet] = useState<string>("");
  const [className, setClassName] = useState<string>("card");
  const correctCounter = useSelector((state: any) => state.fetchCounter);

  const _matchAnswer = (value: string) => {
    if (answer === value) {
      setClassName("right");
      dispatch(updateCounter(correctCounter));
    } else {
      setClassName("wrong");
    }
  };

  useEffect(() => {
    setClassName("card");
  }, [option, answer, selectedAnswer, index]);
  return (
    <Typography
      className={
        className === "card"
          ? `${classes.card}`
          : className === "right"
          ? `${classes.right}`
          : className === "wrong"
          ? `${classes.wrong}`
          : ""
      }
      style={{ fontWeight: "bold" }}
      variant={"subtitle2"}
      onClick={() => {
        selectedAnswer(option);
        _matchAnswer(option);
      }}
    >
      {index + 1} : {option}
    </Typography>
  );
};
const useStyles = makeStyles((theme) => ({
  card: {
    padding: 20,
    backgroundColor: "#FCF6F5FF",
    transition: theme.transitions.create(["background", "background-color"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      backgroundColor: "#E69A8DFF",
      color: "#5F4B8BFF",
    },
  },
  right: {
    padding: 20,
    backgroundColor: "green",
    transition: theme.transitions.create(["background", "background-color"], {
      duration: theme.transitions.duration.complex,
    }),
  },
  wrong: {
    padding: 20,
    backgroundColor: "red",
    transition: theme.transitions.create(["background", "background-color"], {
      duration: theme.transitions.duration.complex,
    }),
  },
}));
export default Option;
