import { Modal, Box, TextField, makeStyles, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createQuestion, updateQuestion } from "../data/actions";

interface questionCardProps {
  question: string;
  options: string[];
  answer: string;
  id: string;
}
interface editModalProps {
  questionData: questionCardProps;
  modalState: boolean;
  onCloseModal: () => void;
}
const EditModal: React.FC<editModalProps> = ({
  questionData,
  modalState,
  onCloseModal,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [question, setQuestion] = useState<string>(
    questionData.question ? questionData.question : ""
  );
  const [answer, setAnswer] = useState<string>(
    questionData.answer ? questionData.answer : ""
  );
  const [options, setOptions] = useState<string[]>(
    questionData.options ? questionData.options : ["", "", "", ""]
  );
  const tempArr = questionData.options
    ? questionData.options
    : ["", "", "", ""];
  const add = () => {
    dispatch(createQuestion({ question, answer, options }));
    onCloseModal();
  };
  const edit = () => {
    dispatch(updateQuestion(questionData?.id, { question, answer, options }));
    onCloseModal();
  };
  return (
    <Modal
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={modalState}
      onClose={() => {
        onCloseModal();
      }}
    >
      <Box
        margin="0 auto"
        bgcolor="white"
        width={460}
        overflow="scroll"
        height={350}
        display="flex"
        alignItems="left"
        flexDirection="column"
        py={3}
        px={5.2}
      >
        <TextField
          label="Question"
          value={question}
          variant="outlined"
          size="small"
          className={classes.spacing}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuestion(e.target.value);
          }}
        />
        <TextField
          label="Answer"
          value={answer}
          variant="outlined"
          size="small"
          className={classes.spacing}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAnswer(e.target.value);
          }}
        />
        {options?.map((item: string, index: number) => (
          <TextField
            key={index}
            label={`Option:${index + 1}`}
            value={item}
            variant="outlined"
            size="small"
            className={classes.spacing}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              tempArr.splice(tempArr.indexOf(item), 1, e.target.value);
              setOptions([...tempArr]);
            }}
          />
        ))}
        <div className={classes.btnClass}>
          <Button
            variant="contained"
            onClick={questionData.question !== "" ? edit : add}
          >
            {questionData.question !== "" ? "Edit" : "Add"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginTop: 10,
  },
  btnClass: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 10,
  },
}));
export default EditModal;
