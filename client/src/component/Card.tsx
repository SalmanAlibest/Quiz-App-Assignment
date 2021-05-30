import React from "react";
import Options from "./Options";
import Question from "./Question";
import { Button } from "@material-ui/core";
interface propsType {
  options: string[];
  question: string;
  answer: string;
  updateCounter: (value: number) => void;
}

const Card: React.FC<propsType> = ({
  options,
  question,
  answer,
  updateCounter,
}) => {
  return (
    <div>
      <Question question={question} />
      <Options
        options={options}
        selectedAnswer={onOptionSelect}
        answer={answer}
      />
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}
      >
        {" "}
        <Button
          variant="contained"
          onClick={() => {
            updateCounter(1 as number);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default Card;
const onOptionSelect = (value: string) => {
  console.log(value);
};
