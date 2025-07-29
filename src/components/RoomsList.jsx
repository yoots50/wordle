import React from "react";

export default function RoomsList({rooms}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "15px",
        width: "80vw",
      }}
    >
      <div
        style={{
          fontSize: "25px",
          padding: "10px",
        }}
      >
        Rooms
      </div>
      <div
        style={{
          padding: "10px",
          display: "grid",
          gridTemplateRows: "repeat(10, 1fr)",
          rowGap: "15px",
          margin: "auto",
          background: "lightblue",
        }}
      >
        {rooms.map((room, i) => {
          return (
            <li
              style={{
                fontSize: "20px",
                backgroundColor: "grey",
                borderRadius: "15px",
                height: "40px",
                display:"flex",
                alignItems:"center",
                paddingLeft:"10px"
              }}
              key={i}
            >
              RoomName: {room.title} WordLength: {room.wordLength} Chances:{" "}
              {room.chances} Rounds: {room.roundPlaying}/{room.rounds} Player:{" "}
              {room.playerNumber}/{room.maxPlayer}
            </li>
          );
        })}
      </div>
    </div>
  );
}
