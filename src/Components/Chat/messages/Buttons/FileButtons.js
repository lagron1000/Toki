import { useState } from "react";
function FileButtons({id, accepts, link1, link2, chooseFileType}) {
    //video + picture input
    function handleChangeInFile(e) {
        debugger
      console.log(e.target.files);
      chooseFileType(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <div>
            <input type="file" id={id} accept={accepts} onChange={handleChangeInFile} hidden></input>
            <label for={id} class="btn btn-outline-dark btn-sm" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
                <path d={link1}></path>
                <path d={link2}></path>
            </svg></label>
        </div>
    );
}
export default FileButtons;