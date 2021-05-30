import { Card, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import EditModal from "./EditModal";
import { deleteQuestion } from "../data/actions";
import { useDispatch } from "react-redux";

interface questionCardProps {
  question: string;
  options: string[];
  answer: string;
  id: string;
}
const QuestionCard: React.FC<questionCardProps> = ({
  question,
  options,
  answer,
  id,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState<boolean>(false);
  return (
    <>
      <Card className={classes.cardClass}>
        <Typography className={classes.typoClass} variant={"subtitle2"}>
          Question:{question}
        </Typography>
        <Typography className={classes.typoClass} variant={"subtitle2"}>
          Answer:{answer}
        </Typography>
        {options.map((item: string, index: number) => (
          <Typography
            className={classes.typoClass}
            variant={"subtitle2"}
            key={index}
          >
            {index + 1}: {item}
          </Typography>
        ))}
      </Card>
      <div className={classes.bottomCard}>
        <EditIcon
          className={classes.iconClass}
          onClick={() => {
            setModalState(true);
          }}
        />
        <DeleteIcon
          className={classes.iconClass}
          onClick={() => {
            dispatch(deleteQuestion(id));
          }}
        />
      </div>
      {modalState && (
        <EditModal
          modalState={modalState}
          questionData={{ question, options, answer, id }}
          onCloseModal={() => {
            setModalState(false);
          }}
        />
      )}
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  cardClass: {
    padding: 20,
    backgroundColor: "#E69A8DFF",
  },
  typoClass: {
    color: "#5F4B8BFF",
    fontWeight: "bold",
  },
  bottomCard: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#5F4B8BFF",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  iconClass: {
    marginRight: 10,
    cursor: "pointer",
    color: "#E69A8DFF",
  },
}));
export default QuestionCard;
