import { useState } from "react";
import React, { Component } from 'react';
import AudioButton from "./Buttons/AudioButton";
import TextButton from "./Buttons/TextButton";
import FileButtons from "./Buttons/FileButtons";
import MessagesService from "../../../Services/MessagesService";
import ContactService from "../../../Services/ContactService";
import ServerComService from "../../../Services/ServerComService";

//text input

const image_input = document.querySelector("#image_input");
function InputBar({ chat, chooseChat, changeUser, updateContacts, connectionState }) {

  // var friendName = Object.keys(chat)[0];
  // var messages = chat[friendName];
  // var newChat = chat;

  const msgTemplate = {
    content: "",
    file: null,
    fileType : "",
    time: "",
    me: true
  }

  const [formVals, setFormVals] = useState(msgTemplate);
  const [msgContent, setContent] = useState("");
  const [msgFile, setFile] = useState(null);
  const [msgFT, setFT] = useState("");
  const [msgTime, setTime] = useState("");

  const handleChange = (event) => {
    currentTime()
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      event.preventDefault();
      handleSubmit();
    }
  }

  const currentTime = () => {
    var today = new Date();
    var now;
    if (today.getMinutes() < 10) {
      now = today.getHours() + ":0" + today.getMinutes()
    }
    else {
      now = today.getHours() + ":" + today.getMinutes()
    }
    setTime(now);
  }

  const handleSubmit = async () => {

    await MessagesService.addNewMessage(chat.id, msgContent, chat.myId);
    let newChat = await ContactService.getContactById(chat.id, chat.myId);
    chooseChat(newChat);
    updateContacts();
    changeUser();
    await ServerComService.sendTransfer(chat.myId, chat.id, msgContent, chat.server);
    await connectionState.invoke("SendMessage", chat.myId, chat.id)
    const msgInput = document.getElementById('submitmsg');
    msgInput.value = ""
    setFile(null);
    setContent("");

    // let startRec = document.getElementById("btnStartRec");
    // startRec.style.backgroundColor = "";

  }

  //video + picture input

  const chooseFileType = (file) => {
    if (file.type.startsWith("image/")) {
      setFT("img")
    }
    else if (file.type.startsWith("video/")) {
      setFT("vid")
    }
    else if (file.type.startsWith("audio")) {
      setFT("audio")
    }
    currentTime()
    setFile(file);
  }


  return (
    <div>
      <div className="textBar">
        <form id="textInput " onSubmit={handleSubmit} autoComplete="off" ><label>
          <input type="text" name="msg" className="form-control" placeholder="enter message"
            aria-label="Recipient's username" aria-describedby="basic-addon2" id="submitmsg"
            value={msgContent} onChange={(e) => { setContent(e.target.value) }} onKeyDown={handleChange} /></label>
        </form>

        {/* <a className="mediaInput"><AudioButton chooseFileType={chooseFileType}></AudioButton></a>
       
        <a className="mediaInput"><FileButtons id={"image_button"} accepts={"image/*"} link1={"M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}
          link2={"M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"}
          chooseFileType={chooseFileType}></FileButtons></a>

        <a className="mediaInput"><FileButtons id={"video_button"} accepts={"video/*"}
          link1={"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"}
          link2={""}
          chooseFileType={chooseFileType}
        ></FileButtons></a> */}

        <button id="submitInput" on className="btn btn-secondary sub" type="submit" onClick={() => { currentTime(); handleSubmit(); }} >Send</button>

      </div>
    </div>
  )
}

export default InputBar;