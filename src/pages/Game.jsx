import React, { useEffect, useState } from "react";
import LetterBoxArray from "../components/LetterBoxArray";

export default function Game({ answer, refresh }) {
  const [value, setValue] = useState("");
  const [chances, setChances] = useState(7);
  const [chancesLeft, setLeft] = useState(0);
  const [history, setHistory] = useState(Array(7).fill(""));
  const [status, setStatus] = useState(0);
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!status) {
      if (value.length !== answer.length) {
        setMsg(`input length must be ${answer.length}!`);
      } else {
        setHistory((prev) =>
          prev.map((p, i) => {
            if (i === chancesLeft) {
              return value;
            } else {
              return p;
            }
          })
        );
        setLeft((prev) => prev + 1);
        if (value === answer) {
          setMsg("Congratuation! You Won!");
          setStatus(2);
        }
        setValue("");
      }
    }
  };
  const handleChancesSubmit = (e) => {
    e.preventDefault();
    if (!status) {
      if (parseInt(chances) < 1) {
        setMsg("Wrong Input!");
      } else {
        setHistory(new Array(chances).fill(""));
      }
    }
  };
  const handleChances = (e) => {
    if (!status) {
      if (parseInt(e.target.value) <= 0) {
        setMsg("Wrong Input!");
      } else {
        setChances(parseInt(e.target.value));
      }
    }
  };
  useEffect(() => {
    if (chancesLeft === chances && !status) {
      setMsg("You Lose!");
      setStatus(1);
    }
  }, [chancesLeft]);

  const handleClick = () => {
    refresh();
    setHistory(Array(chances).fill(""));
    setLeft(0);
    setStatus(0);
  };
  useEffect(() => {
    console.log(answer);
  }, [answer]);
  return (
    <div>
      <div>
        {history !== undefined &&
          history.map((h) => <LetterBoxArray answer={answer} inputWord={h} />)}
      </div>
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
      <button onClick={handleClick}>refresh</button>
      <form onSubmit={handleChancesSubmit}>
        <input
          placeholder="Type chances..."
          value={chances}
          type="number"
          onChange={handleChances}
          name="answer"
        />
        <button>submit</button>
      </form>
      <h1>{msg}</h1>
    </div>
  );
}
