//audio recording
function AudioButton() {
  let audioIN = { audio: true };
navigator.mediaDevices.getUserMedia(audioIN)
  .then(function (mediaStreamObj) {
    let audio = document.querySelector("audio");
    // 'srcObject' is a property that
    // takes the media object (in newer browsers)
    if ("srcObject" in audio) {
      audio.srcObject = mediaStreamObj;
    }
    else {   // Old version
      audio.src = window.URL
        .createObjectURL(mediaStreamObj);
    }
    audio.onloadedmetadata = function (ev) {
      audio.play();
    };
    let startRec = document.getElementById("btnStartRec");
    let stopRec = document.getElementById("btnStopRec");
    let playAudio = document.getElementById("audioPlay");
    // API, Pass the audio stream
    let mediaRecorder = new MediaRecorder(mediaStreamObj);
    // Use a listener, while start button is clicked- start
    startRec.addEventListener("click", function (ev) {
      mediaRecorder.start();
    })
    // Use a listener, while stop button is clicked- stop
    stopRec.addEventListener("click", function (ev) {
      mediaRecorder.stop();
      audioIN = { audio: false };
    });
    let dataArray = [];
    // If audio data available then push into the array
    mediaRecorder.ondataavailable = function (ev) {
      dataArray.push(ev.data);
    }
    // Convert the audio data to blob
    mediaRecorder.onstop = function (ev) {
      let audioData = new Blob(dataArray,
                { 'type': 'audio/mp3;' });
       
      // Empty array
      dataArray = [];
      // Creating audio url
      let audioSrc = URL.createObjectURL(audioData);
      playAudio.src = audioSrc;
    }
  })
  // If any error occurs then handles the error
  .catch(function (err) {
    console.log(err.name, err.message);
  });
return (
  <div>
    <button id="btnStartRec">start recording</button>
    <button id="btnStopRec" >stop recording</button>
    <audio controls hidden></audio>
    <audio id="audioPlay" controls></audio>
  </div>
);

}
export default AudioButton;
