import React, { useState } from "react";

export default function UserWordForm({ answer, info, setInfo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.status) {
      if (value.length !== answer.length) {
        setInfo((prev) => {
          return { ...prev, msg: `input length must be ${answer.length}!` };
        });
      } else {
        setInfo((prev) => {
          return {
            ...prev,
            history: prev.history.map((p, i) => {
              if (i === info.chancesUsed) {
                return value;
              } else {
                return p;
              }
            }),
          };
        });
        setInfo((prev) => {
          return { ...prev, chancesUsed: prev.chancesUsed + 1 };
        });
        if (value === answer) {
          setInfo((prev) => {
            return { ...prev, msg: "Congratuation! You Won!", status: 2 };
          });
        }
        setValue("");
      }
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type answer..."
            value={value}
            type="text"
            onChange={handleChange}
            name="answer"
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}
