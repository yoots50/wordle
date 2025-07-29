import { useState } from "react";
import SinglePlayerConfig from "../components/SinglePlayerConfig";
import { useQuery } from "@tanstack/react-query";
import loadRooms from "../api/loadRooms";
import RoomsList from "../components/RoomsList";
import ChatBox from "../components/ChatBox";
import { useSocket } from "../context/SocketProvider";
import MultiPlayerConfig from "../components/MultiPlayerConfig";

export default function Lobby() {
  const { isConnected } = useSocket();
  const [showSinglePlayConfig, setShowSinglePlayConfig] = useState(false);
  const [showMultiPlayConfig, setShowMultiPlayConfig] = useState(false);
  const handleSinglePlayButton = () => {
    setShowSinglePlayConfig((prev) => !prev);
  };
  const handleMultiPlayButton = () => {
    setShowMultiPlayConfig((prev) => !prev);
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
    queryKey: ["rooms"],
    queryFn: () => loadRooms(),
  });
  return (
    <div>
      {isConnected ? (
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
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <button
                    onClick={handleSinglePlayButton}
                    style={{
                      width: "100px",
                    }}
                  >
                    SinglePlay
                  </button>
                  <button
                    onClick={handleMultiPlayButton}
                    style={{
                      width: "100px",
                    }}
                  >
                    Make Room
                  </button>
                </div>
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
              <ChatBox chatServer={"public"}/>
            </div>
          </div>
        </div>
      ) : null}
      {showSinglePlayConfig ? (
        <SinglePlayerConfig setShowSinglePlayConfig={setShowSinglePlayConfig} />
      ) : null}
      {showMultiPlayConfig ? (
        <MultiPlayerConfig setShowMultiPlayConfig={setShowMultiPlayConfig} />
      ) : null}
      {error ? error : null}
    </div>
  );
}
