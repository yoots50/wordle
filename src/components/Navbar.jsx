import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "green",
      }}
    >
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/lobby"}>lobby</Link>
    </div>
  );
}
