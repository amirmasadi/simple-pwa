import { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import db from "../../firebase";
import Avatar from "./Avatar";
import "./chatSec.css";
import SignIn from "./SignIn";
import { UserContext, ParamContext } from "../../DataProvider";
import MsgsSec from "./MsgsSec";
import firebase from "firebase";

export default function ChatSec() {
  const user = useContext(UserContext);
  const roomId = useContext(ParamContext);
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  function sendHandler(msg) {
    if (inputVal !== "") {
      db.collection("rooms").doc(roomId).collection("msgs").add({
        msg: msg,
        who: user,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInputVal("");
    }
  }

  return (
    <div className="chat">
      <Avatar name="Amirasadi" subTitle="how can i help you..." />
      <div className="chat-body">
        {user === "amir Asadi" && (
          <div className="rooms">
            {rooms.map((rum) => (
              <Avatar name={rum.data.name} key={rum.id} id={rum.id} />
            ))}
          </div>
        )}
        {user && (
          <Route path="/:roomId" exact={true}>
            <MsgsSec messages={messages} setMessages={setMessages} />
          </Route>
        )}
        {!user && <SignIn rooms={rooms} />}
      </div>

      <div className="chat-footer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (user) {
              sendHandler(inputVal);
            }
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
