import axios from "axios";

export default function loadRooms() {
  return axios.get("../data/testLobby.json").then((r) => {
    return r.data.rooms;
  });
}
