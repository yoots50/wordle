import React, { useContext, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";

export default function ChatBox({ chatServer }) {
  const { socket, isConnected } = useSocket();
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  useEffect(() => {
    if (!isConnected) return;
    socket.emit(`enter_chat`, { userName: "anonymous", server: chatServer });
    return () => {
      socket.emit("leave_chat", { userName: "anonymous", server: chatServer });
    };
  }, [isConnected]);
  useEffect(() => {
    if (!isConnected) return;
    socket.on("chat", (msg) => {
      setChatList((prev) => [...prev, msg]);
    });

    return () => {
      socket.off(chatServer);
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("chat", { message: message, server: chatServer });
    setMessage("");
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        height: "200px",
      }}
    >
      <div
        style={{
          height: "calc(100% - 30px)",
          overflowY: "scroll",
        }}
      >
        {chatList.map((chat, i) => {
          return <div key={i}>{chat}</div>;
        })}
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          height: "30px",
        }}
      >
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            height: "26px",
            width: "calc(100% - 54px)",
            padding: "0px",
          }}
        />
        <button
          type="submit"
          style={{
            height: "30px",
            width: "50px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
