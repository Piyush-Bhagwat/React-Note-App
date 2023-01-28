import React from "react";
import { useState } from "react";
import EditorTitle from "./EditorTitle";
import EditorTopNav from "./editorTopNav/editorTopNav";

export default function Editor({data}) {

    const [isEditable, editingToggle] = useState(false)

    const toggleEditing = ()=>{
        editingToggle(!isEditable);
        console.log("is Editable: "+ isEditable);
    }

    return (
        <div className="noteEditor">
            <EditorTopNav editing={toggleEditing} />
            <EditorTitle isEditable={isEditable} data={data}/>
            <div className="displayArea">
                
                <p contentEditable={isEditable}>{data.content}</p>
            </div>
        </div>
    );
}
