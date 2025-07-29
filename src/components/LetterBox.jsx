import React from "react";
import LetterBoxArray from "./LetterBoxArray";

export default function LetterBox({ history, answer }) {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "black",
        display: "grid",
        rowGap: "10px",
        alignItems: "center",
        borderRadius: "15px",
      }}
    >
      {history !== undefined &&
        history.map((h, i) => <LetterBoxArray answer={answer} inputWord={h} key={i}/>)}
    </div>
  );
}
