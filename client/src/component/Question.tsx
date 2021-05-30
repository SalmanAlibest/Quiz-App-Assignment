import { Card, Typography } from "@material-ui/core";
import React from "react";
interface questionProp {
  question: string;
}
const Question: React.FC<questionProp> = ({ question }) => {
  return (
    <Card
      style={{ padding: 20, backgroundColor: "#E69A8DFF", marginBottom: 40 }}
    >
      <Typography
        style={{ color: "#5F4B8BFF", fontWeight: "bold" }}
        variant={"subtitle2"}
      >
        Q: {question}
      </Typography>
    </Card>
  );
};
export default Question;
