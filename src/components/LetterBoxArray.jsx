import React from "react";
import LetterBox from "./LetterBox";

export default function LetterBoxArray({ answer, inputWord }) {
  const splitAnswer = [...answer];
  const splitInput = [...inputWord];
  return (
    <div style={{ display: "flex" }}>
      {inputWord
        ? splitInput.map((letter, index) => {
            if (splitAnswer[index] === letter) {
              return <LetterBox letter={letter} color={"green"} />;
            } else if (
              splitAnswer.find((letter) => letter === splitInput[index])
            ) {
              return <LetterBox letter={letter} color={"yellow"} />;
            } else if (splitInput.length > 0) {
              return <LetterBox letter={letter} color={"red"} />;
            } else {
              return <LetterBox letter={"x"} color={"grey"} />;
            }
          })
        : Array.from(Array(answer.length), (x) => <LetterBox letter={""} color={"grey"} />)}
    </div>
  );
}
