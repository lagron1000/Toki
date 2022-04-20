import { useState } from "react";
// //audio recording
// import React, { Component } from 'react'
// import AudioReactRecorder, { RecordState } from 'audio-react-recorder'


//text input
const image_input = document.querySelector("#image_input");
function InputBar() {
  const messages = [];
  const values = {
    msg: ""
  }
  const [formVals, setFormVals] = useState(values)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVals({ ...formVals, [name]: value })
    event.preventDefault();
    console.log(formVals);
  }
  const handleSubmit = () => {
    messages.push(values.msg);
    for (let i = 0; i < messages.length; i++) {
      console.log(messages[i]);
    }
  }

  //video + picture input
  const [file, setFile] = useState();
  function handleChangeInFile(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  
  //audio input

  //trial I

  // const [recording, setRecording] = useState();
  // const [recordings, setRecordings] = useState([]);
  // async function startRecording() {
  //   setRecording(recording);
  // }
  // async function stopRecording() {
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();
  //   let updatedRecordings= [...recordings];
  //   const {sound, status} = await recording.createNewLoadedSoundAsync();
  //   updatedRecordings.push({
  //     sound: sound,
  //     duration: getDurationFormatted(status.durationMillis),
  //     file: recording.getURL()
  //   });
  //   setRecordings(updatedRecordings);
  // }

  // function getDurationFormatted(millis) {
  //   const minutes = millis / 1000 / 60;
  //   const minutesDisplay = Math.floor(minutes);
  //   const seconds = Math.round((minutes-minutesDisplay) *60);
  //   const secondsDisplay = seconds < 10 ? `0${seconds}`:seconds;
  //   return `${minutesDisplay}:${secondsDisplay}`;
  // }


//trial II


//   var canvas = document.querySelector("canvas");

// // Optional frames per second argument.
// var stream = canvas.captureStream(25);
// var recordedChunks = [];

// console.log(stream);
// var options = { mimeType: "video/webm; codecs=vp9" };
// var mediaRecorder = new MediaRecorder(stream, options);

// mediaRecorder.ondataavailable = handleDataAvailable;
// mediaRecorder.start();

// function handleDataAvailable(event) {
//   console.log("data-available");
//   if (event.data.size > 0) {
//     recordedChunks.push(event.data);
//     console.log(recordedChunks);
//     download();
//   } else {
//     // ...
//   }
// }
// function download() {
//   var blob = new Blob(recordedChunks, {
//     type: "video/webm"
//   });
//   var url = URL.createObjectURL(blob);
//   var a = document.createElement("a");
//   document.body.appendChild(a);
//   a.style = "display: none";
//   a.href = url;
//   a.download = "test.webm";
//   a.click();
//   window.URL.revokeObjectURL(url);
// }

// demo: to download after 9sec
// setTimeout(event => {
//   console.log("stopping");
//   mediaRecorder.stop();
// }, 9000);

  return (
    <div>
      {/* <pre> {JSON.stringify(formValues</pre> action="input.php" method="post"target="_self" */} 
      <form autoComplete="off" ><label>
        <input type="text" name="msg" className="form-control"  placeholder="enter message" aria-label="Recipient's username" aria-describedby="basic-addon2" id="submitmsg" value={formVals.msg} onChange={handleChange} onClick={handleSubmit} /></label>
        <input name="submitmsg" className="btn btn-outline-secondary" type="submit" value="Send" required onClick={handleSubmit} onClickCapture={handleSubmit} />
      </form>

      {/* image uploading button */}
      <input type="file" id="image_button" accept="image/*" onChange={handleChangeInFile} hidden></input>
        <label for="image_button" class="btn btn-outline-dark btn-sm" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
        </svg></label>
      <div id="display_image">
      <img src = {file}/></div>

     {/* video uploading button */}
      <input type="file" id="video_button" accept="video/*" onChange={handleChangeInFile} hidden></input>
        <label for="video_button" class="btn btn-outline-dark btn-sm" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
      </svg></label> 
      <div id="display_video">
      <video src = {file} width="320" height="240" controls></video></div>
      {/* audio uploading button */}

      
      <button type="button" class="btn btn-outline-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
      </svg></button><audio src = {file} ></audio>
    </div>
  );
}

//trial II con.
// title = {recording ? 'stop Recording' : 'start Recording'} onClick = {() =>{recording ? stopRecording : startRecording}}

export default InputBar;