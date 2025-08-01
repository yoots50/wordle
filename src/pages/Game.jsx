import { useEffect, useState } from "react";
import loadWordList from "../api/loadWordList";
import { useQuery } from "@tanstack/react-query";
import LetterBox from "../components/LetterBox";
import UserWordForm from "../components/UserWordForm";
import { Link, useSearchParams } from "react-router-dom";
import ChatBox from "../components/ChatBox";

export default function Game() {
  const [searchParams, setSearchParams] = useSearchParams();
  const chances = parseInt(searchParams.get("chances"));
  const roomId = searchParams.get("roomId");
  const [wordLength, setLength] = useState(5);
  const [info, setInfo] = useState({
    msg: "",
    chancesUsed: 0,
    status: 0,
    history: Array(chances).fill(""),
  });
  const {
    isLoading,
    error,
    data: wordList,
  } = useQuery({
    queryKey: ["wordList", wordLength],
    queryFn: () => loadWordList(wordLength),
  });
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setAnswer(wordList[Math.floor(Math.random() * wordList.length)]);
    }
  }, [wordList]);

  useEffect(() => {
    if (info.chancesUsed === chances && !info.status) {
      setInfo((prev) => {
        return { ...prev, msg: "You Lose!", status: 1 };
      });
    }
  }, [info.chancesUsed]);

  const refresh = () => {
    setAnswer(wordList[Math.floor(Math.random() * wordList.length)]);
    setInfo((prev) => {
      return {
        msg: "",
        chancesUsed: 0,
        status: 0,
        history: Array(chances).fill(""),
      };
    });
  };

  const handleClick = () => {
    refresh();
  };

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 80px)",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "lightblue",
          }}
        >
          <div
            style={{
              width: "40vw",
              height: "100%",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <LetterBox history={info.history} answer={answer} />
            </div>
            <h1
              style={{
                backgroundColor: "grey",
                width: "500px",
                height: "50px",
                fontSize: "35px",
                textAlign: "center",
                border: "solid 3px black",
              }}
            >
              {info.msg}
            </h1>
            <UserWordForm answer={answer} info={info} setInfo={setInfo} />
            {roomId ? null : <button onClick={handleClick}>refresh</button>}
            {roomId ? <ChatBox chatServer={roomId} /> : null}
          </div>
        </div>
      )}
      {error ? `Error Occured! :${error}` : null}
    </div>
  );
}
