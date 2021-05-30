import { Grid, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { QuizArray } from "../Types/Quiz";
import EditModal from "./EditModal";
import QuestionCard from "./QuestionCard";

const Admin = () => {
  const classes = useStyles();
  const question = useSelector((state: any) => state.fetchQuestion);
  console.log("Admin", question);
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <div className={classes.layout}>
      <div style={{ marginTop: 100 }}></div>
      <Button
        style={{
          marginBottom: 10,
        }}
        variant="contained"
        onClick={() => {
          setModalState(true);
        }}
      >
        Add New Question +
      </Button>
      <Grid container spacing={1}>
        {question.map((item: QuizArray, index: number) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <QuestionCard
              question={item?.question}
              options={item?.options}
              answer={item?.answer}
              id={item?._id}
            />
          </Grid>
        ))}
      </Grid>
      {modalState && (
        <EditModal
          modalState={modalState}
          questionData={{
            question: "",
            options: ["", "", "", ""],
            answer: "",
            id: "",
          }}
          onCloseModal={() => {
            setModalState(false);
          }}
        />
      )}
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
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  })
);

export default Admin;
