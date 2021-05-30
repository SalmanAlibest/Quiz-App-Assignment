import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Option from "./Option";
interface optionsProps {
  options: string[];
  selectedAnswer: (val: string) => void;
  answer: string;
}
const Options: React.FC<optionsProps> = ({
  options,
  selectedAnswer,
  answer,
}) => {
  const classes = useStyles();
  return (
    <div>
      {options?.map((item: string, index: number) => (
        <Card
          // className={`${classes.card}`}
          style={{
            marginBottom: 5,
            cursor: "pointer",
          }}
          key={index}
        >
          <Option
            option={item}
            answer={answer}
            selectedAnswer={selectedAnswer}
            index={index}
          />
        </Card>
      ))}
    </div>
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
export default Options;
