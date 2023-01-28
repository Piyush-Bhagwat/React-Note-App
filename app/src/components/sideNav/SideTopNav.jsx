import React from "react";

export default function SideTopNav({addNewNote}){

    return (
        <div className="sideTopNav TopNav">
            <button><i className="fa-solid fa-tags"></i></button>
            <button onClick={addNewNote}><i className="fa-regular fa-square-plus"></i></button>
        </div>
    )
}