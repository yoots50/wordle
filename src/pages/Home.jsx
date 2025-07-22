import { useQuery } from "@tanstack/react-query";
import loadWordList from "../api/loadWordList";
import { useEffect, useState } from "react";
import Game from "./Game";

export default function Home() {
  const [wordLength, setLength] = useState(5);
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
  const refresh = () => {
    setAnswer(wordList[Math.floor(Math.random() * wordList.length)]);
  };
  return (
    <div>
      {isLoading ? "loading..." : <Game answer={answer} refresh={refresh} />}
      {error !== null ? "An unknown error occured" : null}
    </div>
  );
}
