import { useState } from "react";

function SubmitButton() {
  const messages = [];
  const values = {
    msg:""
  }
  const [formVals, setFormVals] = useState(values)
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormVals({...formVals, [name]:value})
    event.preventDefault();
    console.log(formVals);
  }
  const handleSubmit = () => {
      messages.push(values.msg);
      for(let i=0; i<messages.length; i++){
          console.log(messages[i]);
      }
  }
  return (
    <div>
      {/* <pre> {JSON.stringify(formValues</pre> action="input.php" method="post"target="_self" */}
      <form autoComplete="off" ><label>
             <input type="text" name="msg" id = "submitmsg" value = {formVals.msg} onChange = {handleChange} onClick={handleSubmit} /></label>
            <input name="submitmsg" type="submit" value="Send" required onClick={handleSubmit} onClickCapture={handleSubmit}/>
            </form>
    </div>
  );
}
export default SubmitButton;