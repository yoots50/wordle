import { useState } from "react";

export default function LetterBox({ letter, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100px",
        width: "100px",
        marginTop: "10px",
        marginLeft: "10px",
        textAlign: "center",
        alignContent: "center"
        
      }}
    >
      <h1>{letter}</h1>
    </div>
  );
}
