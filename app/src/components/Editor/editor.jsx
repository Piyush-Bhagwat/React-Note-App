import React from "react";
import { useState } from "react";
import { setNote } from "../../data";
import EditorTitle from "./EditorTitle";
import EditorTopNav from "./editorTopNav/editorTopNav";

export default function Editor({ data, onEdit, onDel }) {
    const [isEditable, editingToggle] = useState(false);

    const toggleEditing = () => {
        if(isEditable) onEdit(returnChange());
        editingToggle(!isEditable);
        console.log("is Editable: " + isEditable);
        
    };

    function returnChange(){
        return({
            title: document.querySelector(".editorTitle h1").innerHTML,
            content: document.querySelector(".displayArea p").innerHTML,
            tag: document.querySelector(".editorTitle .dateTag .tag").innerHTML,
            date: document.querySelector(".editorTitle p").innerHTML,
        });
    };

    return (
        <div className="noteEditor">
            <EditorTopNav editing={toggleEditing} del={onDel} />
            <EditorTitle isEditable={isEditable} data={data} />
            <div className="displayArea">
                <p contentEditable={isEditable}>
                    {data.content}
                </p>
            </div>
        </div>
    );
}
