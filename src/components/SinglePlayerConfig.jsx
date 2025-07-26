import { useState } from "react";
import { Link } from "react-router-dom";

export default function SinglePlayerConfig({ setShowSinglePlayConfig }) {
  const MAX_CHANCES = 8;
  const MIN_CHANCES = 1;
  const [chances, setChances] = useState(7);
  const handleCancleButton = () => {
    setShowSinglePlayConfig(false);
  };
  const handleChances = (e) => {
    if (MIN_CHANCES <= e.target.value && e.target.value <= MAX_CHANCES) {
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
          <div
            style={{
              display: "flex",
              height: "40px",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                marginRight: "10px",
              }}
            >
              chances:
            </div>
            <input
              type="number"
              value={chances}
              onChange={handleChances}
              name="chances"
            />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              to={`/game?chances=${chances}`}
              style={{
                backgroundColor: "grey",
                color: "black",
                textDecorationLine: "none",
                border: "solid 3px black",
                alignContent: "center",
                paddingLeft: "8px",
                paddingRight: "8px",
                borderRadius: "15px",
                fontSize: "40px",
                paddingBottom: "4px",
              }}
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
