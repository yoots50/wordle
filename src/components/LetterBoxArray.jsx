import React from "react";
import LetterBoxElement from "./LetterBoxElement";

export default function LetterBoxArray({ answer, inputWord }) {
  const splitAnswer = [...answer];
  const splitInput = [...inputWord];
  return (
    <div style={{ display: "grid",
      gridTemplateColumns: `repeat(${answer.length}, 1fr)`,
      columnGap: "10px"
     }}>
      {inputWord
        ? splitInput.map((letter, index) => {
            if (splitAnswer[index] === letter) {
              return <LetterBoxElement letter={letter} color={"green"} />;
            } else if (
              splitAnswer.find((letter) => letter === splitInput[index])
            ) {
              return <LetterBoxElement letter={letter} color={"yellow"} />;
            } else if (splitInput.length > 0) {
              return <LetterBoxElement letter={letter} color={"red"} />;
            } else {
              return <LetterBoxElement letter={"x"} color={"grey"} />;
            }
          })
        : Array.from(Array(answer.length), (x) => <LetterBoxElement letter={""} color={"grey"} />)}
    </div>
  );
}
