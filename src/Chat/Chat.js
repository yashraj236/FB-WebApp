import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { useHistory, useParams } from "react-router-dom";
//importing firebase
//importing components
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
//importing material-ui
import CircularProgress from "@material-ui/core/CircularProgress";
//importing styles
import "react-toastify/dist/ReactToastify.css";
import "./Chat.css";

function Chat({ isRoomExist, data }) {
  const history = useHistory();
  const [{ user }] = useStateValue();
  const { roomId } = useParams();
  const [_roomId, set_RoomId] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomCreatedBy, setRoomCreatedBy] = useState("");
  const [roomOwner, setRoomOwner] = useState("");
  const [messages, setMessages] = useState(data.messages);
  const [loading, setLoading] = useState(false);

  return (
    <div className="chat">
      <div>
        <ChatHeader
          roomCreatedBy={roomCreatedBy}
          roomOwner={roomOwner}
          roomName={roomName}
          roomId={roomId}
          _roomId={_roomId}
          messages={messages}
          db={""}
          history={history}
          isRoomExist={isRoomExist}
        />
      </div>

      <div className="chat__body">
        <ChatBody
          roomCreatedBy={roomCreatedBy}
          roomOwner={roomOwner}
          roomId={roomId}
          messages={messages}
          user={user}
          isRoomExist={isRoomExist}
        />
      </div>

      <div>
        <ChatFooter
          roomName={roomName}
          roomId={roomId}
          db={"db"}
          // firebase={firebase}
          // storage={storage}
        />
      </div>
    </div>
  );
}

export default Chat;
