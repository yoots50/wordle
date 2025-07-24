import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SinglePlayerConfig({ setShowSinglePlayConfig }) {
  const [chances, setChances] = useState(7);
  const handleCancleButton = () => {
    setShowSinglePlayConfig(false);
  };
  const handleChances = (e) => {
    if (e.target.value > 0) {
      setChances(e.target.value);
    }
  };
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "grey",
          opacity: "0.2",
          zIndex: "1",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "600px",
          top: "calc(50vh - 300px)",
          left: "calc(50vw - 225px)",
          backgroundColor: "white",
          zIndex: "2",
          borderRadius: "15px",
          border: "solid 2px black",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
            backgroundColor: "green",
            borderTopLeftRadius: "13px",
            borderTopRightRadius: "13px",
            alignItems: "center",
            borderBottom: "solid 5px black",
          }}
        >
          <h1
            style={{
              fontSize: "15px",
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "10px",
              border: "solid 1px black",
            }}
          >
            SinglePlayerConfig
          </h1>
          <button
            style={{
              display: "flex",
              height: "40px",
              width: "40px",
              borderRadius: "20px",
              border: "solid 1px black",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleCancleButton}
          >
            X
          </button>
        </div>
        <div>
          <input type="number" value={chances} onChange={handleChances} />
          <Link to={`/game?chances=${chances}`}>Start</Link>
        </div>
      </div>
    </div>
  );
}
