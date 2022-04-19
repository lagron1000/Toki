import './Message.css';
import { useState } from "react";
import SubmitButton from './SubmitButton';
// bootstrap flex
function Message() {
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
            
            <div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
            <div class="d-flex flex-column bd-highlight mb-3">
                 <div class="p-2 bd-highlight">Flex item 1</div>
                <div class="p-2 bd-highlight">Flex item 2</div>
                <div class="p-2 bd-highlight">Flex item 3</div>
            </div>
            <div class="d-flex flex-column-reverse bd-highlight">
                <div class="p-2 bd-highlight">Flex item 1</div>
            </div>
                <table>
                    <thead>
                       hello
                    </thead>
                    <tbody>
                        {/* hiiiii */}
                    </tbody>
                </table>
                <div id='input' class="column">
                    <SubmitButton></SubmitButton>
                </div>
                <div id='buttons' class="column">
                    <div>
                    <button type="button" class="btn btn-outline-info btn-sm">Info</button>
                    <i class="bi bi-house-fill"></i></div>
                    <button type="button" class="btn btn-outline-light btn-sm">Light</button>
                    <button type="button" class="btn btn-outline-dark btn-sm">Dark</button></div>
            </div>
    );
}

export default Message;