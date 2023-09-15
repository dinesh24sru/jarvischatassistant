import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSpinner,
  upsertOpenAIChat,
  upsertUserMessage,
} from "../../redux/slices/chat";

import "./index.css";

function Dashboard() {
  const [inputCode, setInputCode] = useState("");
  const dispatch = useDispatch();
  const { messages, spinner } = useSelector((state) => state.chat);

  const handleChatRequest = async () => {
    dispatch(toggleSpinner(true));
    dispatch(upsertUserMessage(inputCode));
    dispatch(upsertOpenAIChat({ inputCode, openAiRequest: true }));
    setInputCode("");
  };
  const handleKeyPress = async (event) => {
    if (event.keyCode === 13) {
      // Do something when the user presses the Enter key.
      await handleChatRequest();
    }
  };

  return (
    <div>
      {messages &&
        messages.map((msg) => {
          return (
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {msg.isUser ? (
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>U</Avatar>
                ) : (
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>J</Avatar>
                )}
              </div>
              <div
                style={{
                  background: msg.isUser ? "" : "white",
                  textAlign: "left",
                  padding: "40px",
                }}
              >
                <ReactMarkdown>{msg?.message}</ReactMarkdown>
              </div>
            </div>
          );
        })}
      {spinner && (
        <div style={{ margin: "40px" }}>
          <LinearProgress style={{ backgroundColor: "#3e87e0" }} />
        </div>
      )}
      <div
        class="chat-input"
        style={{
          width: "75vw",
          position: "absolute",
          bottom: "0",
          margin: "20px",
        }}
      >
        <input
          type="text"
          id="message-input"
          style={{ padding: "15px" }}
          placeholder="Ask me a question..."
          value={inputCode}
          disabled={spinner}
          onChange={(e) => setInputCode(e.target.value)}
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
        />
        <button
          id="send-button"
          disabled={spinner}
          onClick={() => handleChatRequest()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export { Dashboard };
