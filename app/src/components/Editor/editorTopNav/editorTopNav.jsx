import React from "react";

export default function EditorTopNav({editing, del}) {
    return (
        <div className="editorTopNav TopNav">
            <h2>My Note</h2>
            <div>
                <button  onClick={editing}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={del}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}
