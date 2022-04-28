// audio recording
import { useEffect, useState } from "react";
function AudioButton(chooseFileType) {
  var chooseFileTypeFunc = chooseFileType["chooseFileType"];


  useEffect(() => {
    let startRec = document.getElementById("btnStartRec");
    let stopRec = document.getElementById("btnStopRec");
    let audioIN = { audio: true };

    stopRec.style.display = "none"

    navigator.mediaDevices.getUserMedia(audioIN)
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        startRec.addEventListener("click", (ev) => {
          startRec.style.display = "none"
          stopRec.style.display = "block"
          mediaRecorder.start();
        })
        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
          startRec.style.backgroundColor = "#56ca7d"
          audioChunks.push(event.data);
          const audioBlob = new Blob(audioChunks);
          chooseFileTypeFunc(audioBlob);
        });
        stopRec.addEventListener("click", function (ev) {
          stopRec.style.display = "none"
          startRec.style.display = "block"
          mediaRecorder.stop();
        })
      });
  });

  // let audioIN = { audio: true };
  // navigator.mediaDevices.getUserMedia(audioIN)
  //   .then(function (mediaStreamObj) {
  //     let audio = document.querySelector("audio");
  //     // 'srcObject' is a property that
  //     // takes the media object (in newer browsers)
  //     if ("srcObject" in audio) {
  //       audio.srcObject = mediaStreamObj;
  //     }
  //     else {   // Old version
  //       audio.src = window.URL
  //         .createObjectURL(mediaStreamObj);
  //     }
  //     audio.onloadedmetadata = function (ev) {
  //       audio.play();
  //     };
  //     let startRec = document.getElementById("btnStartRec");
  //     let stopRec = document.getElementById("btnStopRec");
  //     let playAudio = document.getElementById("audioPlay");
  //     // API, Pass the audio stream
  //     let mediaRecorder = new MediaRecorder(mediaStreamObj);
  //     // Use a listener, while start button is clicked- start
  //     startRec.addEventListener("click", function (ev) {
  //       mediaRecorder.start();
  //     })
  //     // Use a listener, while stop button is clicked- stop
  //     stopRec.addEventListener("click", function (ev) {
  //       mediaRecorder.stop();
  //       audioIN = { audio: false };
  //     });
  //     let dataArray = [];
  //     // If audio data available then push into the array
  //     mediaRecorder.ondataavailable = function (ev) {
  //       dataArray.push(ev.data);
  //     }
  //     // Convert the audio data to blob
  //     mediaRecorder.onstop = function (ev) {
  //       let audioData = new Blob(dataArray,
  //                 { 'type': 'audio/mp3;' });

  //       // Empty array
  //       dataArray = [];
  //       // Creating audio url

  //       let audioSrc = URL.createObjectURL(audioData);
  //       debugger;
  //       chooseFileTypeFunc(audioSrc);
  //       this.stream.getTracks().forEach(track => track.stop());
  //       // playAudio.src = audioSrc;
  //     }
  //   })
  //   // If any error occurs then handles the error
  //   .catch(function (err) {
  //     console.log(err.name, err.message);
  //   })
  return (
    <div>
      <button id="btnStartRec" class="btn btn-outline-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
      </svg></button>
      <button id="btnStopRec" class="btn btn-outline-dark btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-mute" viewBox="0 0 16 16">
        <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z" />
        <path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z" />
      </svg></button>
      {/* <audio controls hidden></audio>
    <audio id="audioPlay" controls></audio> */}
    </div>
  );

}
export default AudioButton;
