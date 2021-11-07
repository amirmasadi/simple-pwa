import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { UserContext, SetParamsContext } from "../DataProvider";
import db from "../firebase";
import "./msgsSec.css";

export default function MsgsSec({ messages, setMessages }) {
  const user = useContext(UserContext);
  const mySetparams = useContext(SetParamsContext);
  let { roomId } = useParams();

  
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("msgs")
        .orderBy("time", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
    mySetparams(roomId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return (
    <div className="msgs">
      {messages.map((msg, index) => (
        <p className={`message ${msg.who === user && "my-msg"}`} key={index}>
          <p className="author">{msg.who}</p>
          {msg.msg}
          <span>
            {`${new Date(msg.time?.toDate()).getFullYear()}/
            ${new Date(msg.time?.toDate()).getMonth() + 1} /
            ${new Date(msg.time?.toDate()).getDate()} 
            
            ${new Date(msg.time?.toDate()).getHours()}:
            ${new Date(msg.time?.toDate()).getMinutes()}
            `}
          </span>
        </p>
      ))}
    </div>
  );
}
