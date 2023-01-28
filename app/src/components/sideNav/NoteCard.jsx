import React from "react";
import Title from "./cardTitle";
import Tag from "./cardTag";

export default function NoteCard({ title, date, tags, id, onClick }) {
    const handleCLick = () =>{
            onClick(id);
    }
    
    return ( 
        <div className="noteCard" onClick={handleCLick}>
            <Title title={title} date={date} />

            <Tag tag={tags}/>
        </div>
    );
}
