import React from "react";

export default function EditorTopNav({editing}) {
    return (
        <div className="editorTopNav TopNav">
            <h2>My Note</h2>
            <div>
                <button  onClick={editing}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}
