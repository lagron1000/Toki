import { useState } from "react";
function TextButton({chat, chooseChat, changeUser, handleChange, handleSubmit}) {
  
    const msgTemplate = {
      content: "",
      file: null,
      time: "",
      me: true
    }
  
    const [formVals, setFormVals] = useState(msgTemplate)

    return(
        <form autoComplete="off" ><label>
        <input type="text" name="msg" className="form-control" placeholder="enter message"
          aria-label="Recipient's username" aria-describedby="basic-addon2" id="submitmsg"
          value={formVals.msg} onChange={handleChange} onKeyDown={handleChange} /></label>
        </form>
    );
}
export default TextButton;