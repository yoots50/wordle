export default function LetterBoxElement({ letter, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100px",
        width: "100px",
        textAlign: "center",
        alignContent: "center",
        borderRadius: "10px"
      }}
    >
      <h1>{letter}</h1>
    </div>
  );
}
