import axios from "axios";

export default function loadWordList(wordLength) {
  return axios.get("../data/defaultWordList.json").then((r) => {
    return r.data.words[parseInt(wordLength) - 1];
  });
}
