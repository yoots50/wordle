import React, { useState } from "react";
import SinglePlayerConfig from "../components/SinglePlayerConfig";
import { useQuery } from "@tanstack/react-query";
import loadRooms from "../api/loadRooms";
import RoomsList from "../components/RoomsList";
import { Link } from "react-router-dom";

export default function Lobby() {
  const [showSinglePlayConfig, setShowSinglePlayConfig] = useState(false);
  const handleSinglePlayButton = () => {
    setShowSinglePlayConfig((prev) => !prev);
  };
  const {
    isLoading,
    error,
    data: rooms,
  } = useQuery({
    queryKey: "rooms",
    queryFn: () => loadRooms(),
  });
  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "pink",
          }}
        >
          <Link to={"/"}>Home</Link>
          <div
            style={{
              height: "80px",
            }}
          >
            <button onClick={handleSinglePlayButton}>SinglePlayer</button>
            {showSinglePlayConfig ? (
              <SinglePlayerConfig
                setShowSinglePlayConfig={setShowSinglePlayConfig}
              />
            ) : null}
          </div>
          <RoomsList rooms={rooms} />
        </div>
      )}
    </div>
  );
}
