import React from "react";
import Tag from "../sideNav/cardTag";

export default function EditorTitle({ data, isEditable }) {
    return (
        <div className="editorTitle">
            <h1 contentEditable={isEditable}>{data.title}</h1>
            <div className="dateTag">
                <p contentEditable={isEditable}>{data.date}</p>
                <Tag tag={data.tags} isEditable={isEditable}/>
            </div>
        </div>
    );
}
