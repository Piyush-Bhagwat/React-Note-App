import React from "react";
import { useState } from "react";
import { addNote } from "../../data";
import Card from "./NoteCard";
import SideTopNav from "./SideTopNav";

export default function SideNav({ data, getID }) {

    const [cardSeed, refreshCardSeed] = useState(0);

    const handleIDChange = (d)=>{
        getID(d);
    };

    const createNewNote = ()=>{
        addNote();  
        refreshCardSeed(Math.random());
    }



    function createCard(data, id) {
        return (
            <Card
                key={id}
                id={id}
                title={data.title}
                date={data.date}
                tags={data.tags}
                onClick = {handleIDChange}
            />
        );
    }

    return (
        <div className="sideNav">
            <SideTopNav addNewNote={createNewNote} />
            <div className="noteCollection" key={cardSeed}>{data.map(createCard)}</div>

        </div>
    );
}
