import axios from "axios";
import React from "react";

export default function loadWordList(wordLength) {
  return axios.get("json/defaultWordList.json").then((r) => {
    return r.data.words[parseInt(wordLength) - 1];
  });
}
