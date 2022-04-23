import { useState } from "react";
import AudioButton from "./Buttons/AudioButton";
import TextButton from "./Buttons/TextButton";
import FileButtons from "./Buttons/FileButtons";
// import './Buttons.css';
// //audio recording
// import React, { Component } from 'react'
// import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

//text input
function InputBar({chat, chooseChat, changeUser}) {

  //video + picture input
  const [file, setFile] = useState(null);

  const chooseFileType = (neededFileType) => {
    debugger;
    setFile(neededFileType)}

  return (
    <div> 
      <TextButton chat = {chat} chooseChat = {chooseChat} changeUser = {changeUser}></TextButton>
      <FileButtons id={"image_button"} accepts={"image/*"} link1={"M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}
        link2={"M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"}
        chooseFileType = {chooseFileType}
      ></FileButtons>
      <div id="display_image">
      <img src = {file}/></div>
     {/* video uploading button */}
      <FileButtons id={"video_button"} accepts={"video/*"}
        link1={"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"}
        link2={""}
        chooseFileType = {chooseFileType}
      ></FileButtons>
      <div id="display_video">
      <video src = {file} width="320" height="240" controls></video></div>
      {/* audio uploading button */}
      <AudioButton></AudioButton>
    </div>
  );
}

export default InputBar;