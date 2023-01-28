import React from "react";
import { useState } from "react";
import Card from "./NoteCard";
import {getDate} from "../../data"
import SideTopNav from "./SideTopNav";


export default function SideNav({ data, getID, onNotesChange}) {
    const [cardSeed, refreshCardSeed] = useState(0);

    const handleIDChange = (d)=>{
        getID(d);
    };

    const createNewNote = ()=>{
        console.log("NewNote");
        refreshCardSeed(Math.random());
        onNotesChange(data);
    }

    function createCard(data, id) {
        return (
            <Card
                key={id}
                id={id}
                title={data.title}
                date={data.date}
                tags={data.tag}
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
