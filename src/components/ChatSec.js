import { useState, useEffect } from "react";
import db from "../firebase";
import Avatar from "./Avatar";
import "./chatSec.css";

export default function ChatSec() {
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([
    { text: "hello there...", time: "10:45" },
    { text: "what the dog doin...", time: "10:45", myMsg: true },
  ]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  function sendHandler(msg) {
    if (inputVal !== "") {
      setMessages([...messages, { text: msg, time: "10:46", myMsg: true }]);
      setInputVal("");
    }
  }

  return (
    <div className="chat">
      <Avatar name="Amirasadi" subTitle="how can i help you..." />
      <div className="chat-body">
        <div className="rooms">
          {rooms.map((rum) => (
            <Avatar name={rum.data.name} key={rum.id} />
          ))}
        </div>
        <div className="msgs">
          {messages.map((msg, index) => (
            <p className={`message ${msg.myMsg && "my-msg"}`} key={index}>
              {msg.text}
              <span>{msg.time}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="chat-footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendHandler(inputVal);
          }}
        >
          <input
            placeholder="type a message"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
        </form>
        <svg
          onClick={() => {
            sendHandler(inputVal);
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 send-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </div>
    </div>
  );
}
