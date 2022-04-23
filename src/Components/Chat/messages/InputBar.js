import { useState } from "react";
import AudioButton from "./Buttons/AudioButton";
import TextButton from "./Buttons/TextButton";
import FileButtons from "./Buttons/FileButtons";
// //audio recording
// import React, { Component } from 'react'
// import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

//text input
const image_input = document.querySelector("#image_input");
function InputBar({chat, chooseChat, changeUser}) {

  //video + picture input
  const [file, setFile] = useState(null);

  const chooseFileType = (neededFileType) => {
    debugger;
    setFile(neededFileType)}

  // function handleChangeInFile(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }

  

  return (
    <div> 
      <TextButton chat = {chat} chooseChat = {chooseChat} changeUser = {changeUser}></TextButton>
      <FileButtons id={"image_button"} accepts={"image/*"} link1={"M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}
        link2={"M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"}
        chooseFileType = {chooseFileType}
      ></FileButtons>
      {/* image uploading button */}
      {/* <input type="file" id="image_button" accept="image/*" onChange={handleChangeInFile} hidden></input>
        <label for="image_button" class="btn btn-outline-dark btn-sm" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
        </svg></label> */}
      <div id="display_image">
      <img src = {file}/></div>

     {/* video uploading button */}
      <FileButtons id={"video_button"} accepts={"video/*"}
        link1={"M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"}
        link2={""}
        chooseFileType = {chooseFileType}
      ></FileButtons>
      {/* <input type="file" id="video_button" accept="video/*" onChange={handleChangeInFile} hidden></input>
      <label for="video_button" class="btn btn-outline-dark btn-sm" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
      </svg></label> */}
      <div id="display_video">
      <video src = {file} width="320" height="240" controls></video></div>
      {/* audio uploading button */}
{/*
      <label for="audio_button"class="btn btn-outline-dark btn-sm" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
      </svg></label> */}
      {/* <audio src = {file} type="audio/*"></audio> */}
      {/* <audio controls>
      <source src="horse.ogg" ></source>
      </audio> */}

      <AudioButton></AudioButton>
    </div>
  );
}

export default InputBar;