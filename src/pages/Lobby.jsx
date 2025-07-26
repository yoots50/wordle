import { useState } from "react";
import SinglePlayerConfig from "../components/SinglePlayerConfig";
import { useQuery } from "@tanstack/react-query";
import loadRooms from "../api/loadRooms";
import RoomsList from "../components/RoomsList";

export default function Lobby() {
  const [showSinglePlayConfig, setShowSinglePlayConfig] = useState(false);
  const handleSinglePlayButton = () => {
    setShowSinglePlayConfig((prev) => !prev);
  };
  const handleRefreshButton = () => {
    refetch();
  };
  const {
    isLoading,
    error,
    refetch,
    data: rooms,
  } = useQuery({
    queryKey: "rooms",
    queryFn: () => loadRooms(),
  });
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 80px)",
          backgroundColor: "pink",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginTop: "80px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                height: "20px",
              }}
            >
              <button
                onClick={handleSinglePlayButton}
                style={{
                  width: "100px",
                }}
              >
                SinglePlayer
              </button>
              <button
                onClick={handleRefreshButton}
                style={{
                  width: "70px",
                }}
              >
                Refresh
              </button>
            </div>
            {isLoading ? "Loading..." : <RoomsList rooms={rooms} />}
          </div>
        </div>
      </div>
      {showSinglePlayConfig ? (
        <SinglePlayerConfig setShowSinglePlayConfig={setShowSinglePlayConfig} />
      ) : null}
      {error ? error : null}
    </div>
  );
}
