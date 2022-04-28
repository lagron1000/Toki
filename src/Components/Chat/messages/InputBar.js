import { useState } from "react";
import React, { Component } from 'react';
import AudioButton from "./Buttons/AudioButton";
import TextButton from "./Buttons/TextButton";
import FileButtons from "./Buttons/FileButtons";
// import Navbar from 'react-bootstrap/Navbar';
// import { Navbar, Nav, NavbarBrand, NavbarToggle, NavbarCollapse, Container, NavDropdown} from "react-bootstrap";
// import './Buttons.css';
// //audio recording
// import React, { Component } from 'react'
// import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

//text input

const image_input = document.querySelector("#image_input");
function InputBar({ chat, chooseChat, changeUser }) {

  var friendName = Object.keys(chat)[0];
  var messages = chat[friendName];
  var newChat = chat;

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

  const handleSubmit = () => {
    currentTime();

    var newCH = {
      content: msgContent,
      file: msgFile,
      fileType: msgFT,
      time: msgTime,
      me: true
    }

    messages.push(newCH)
    newChat[friendName] = messages
    chooseChat(newChat);
    changeUser();

    const msgInput = document.getElementById('submitmsg');
    msgInput.value = ""
    setFile(null);
    setContent("");

    let startRec = document.getElementById("btnStartRec");
    startRec.style.backgroundColor = "";

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

        <a className="mediaInput"><AudioButton chooseFileType={chooseFileType}></AudioButton></a>
        {/* 
        <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
          <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg></a> */}

        <a className="mediaInput"><FileButtons id={"image_button"} accepts={"image/*"} link1={"M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}
          link2={"M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"}
          chooseFileType={chooseFileType}></FileButtons></a>

        <a className="mediaInput"><FileButtons id={"video_button"} accepts={"video/*"}
          link1={"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"}
          link2={""}
          chooseFileType={chooseFileType}
        ></FileButtons></a>

        <a id="submitInput" on className="btn btn-secondary sub" type="submit" onClick={() => { currentTime(); handleSubmit(); }} >Send</a>

      </div>
    </div>
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <div className="textBar">
    //           <form onSubmit={handleSubmit} autoComplete="off" ><label>
    //             <input type="text" name="msg" className="form-control" placeholder="enter message"
    //               aria-label="Recipient's username" aria-describedby="basic-addon2" id="submitmsg"
    //               value={msgContent} onChange={(e) => { setContent(e.target.value) }} onKeyDown={handleChange} /></label>
    //           </form>

    //           <a on className="btn btn-secondary sub" type="submit" onClick={() => { currentTime(); handleSubmit(); }} >Send</a>
    //         </div>

    //       </li>
    //       <li>
    //         <AudioButton chooseFileType={chooseFileType}></AudioButton>
    //       </li>
    //       <li><a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down" viewBox="0 0 16 16">
    //         <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
    //         <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
    //       </svg></a>
    //         <ul>
    //           <li>
    //             <a><FileButtons id={"image_button"} accepts={"image/*"} link1={"M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}
    //               link2={"M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"}
    //               chooseFileType={chooseFileType}></FileButtons></a>
    //           </li>
    //           <li>
    //             <a><FileButtons id={"video_button"} accepts={"video/*"}
    //               link1={"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"}
    //               link2={""}
    //               chooseFileType={chooseFileType}
    //             ></FileButtons></a>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  )
}

export default InputBar;