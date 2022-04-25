import { useState } from "react";
function TextButton({chat, chooseChat, changeUser, handleChange, handleSubmit}) {
// , fileObj, confirm
    // var friendName = Object.keys(chat)[0];
    // var messages = chat[friendName];
    // var newChat = chat;
    // const objectURL = window.URL.createObjectURL(fileObj);
  
    const msgTemplate = {
      content: "",
      file: null,
      time: "",
      me: true
    }
  
    const [formVals, setFormVals] = useState(msgTemplate)


//     const handleChange = (event) => {
//       if (event.code === "Enter" || event.code === "NumpadEnter") {
//         event.preventDefault();
//         handleSubmit();
//       }
//       else {
//         msgTemplate.content = event.target.value;
//         var today = new Date();
//         debugger;
//         if (today.getMinutes()<10) {
//           msgTemplate.time = today.getHours() + ":0" + today.getMinutes()
//         }
//         else {
//           msgTemplate.time = today.getHours() + ":" + today.getMinutes()
//         }
        
//         setFormVals(msgTemplate);
//       }
//     }

  
    // const handleSubmit = () => {
    //   messages.push(formVals)
    //   newChat[friendName] = messages
    //   chooseChat(newChat);
    //   changeUser();
  
    //   const msgInput = document.getElementById('submitmsg');
    //   msgInput.value = ""
    // }

    return(
        <form autoComplete="off" ><label>
        <input type="text" name="msg" className="form-control" placeholder="enter message"
          aria-label="Recipient's username" aria-describedby="basic-addon2" id="submitmsg"
          value={formVals.msg} onChange={handleChange} onKeyDown={handleChange} /></label>
        {/* <input name="submitmsg" className="btn btn-outline-secondary"
          type="submit" value="Send" required onClick={handleSubmit} onClickCapture={handleSubmit} /> */}
      </form>
    );
}
//maxLength = "10"
export default TextButton;