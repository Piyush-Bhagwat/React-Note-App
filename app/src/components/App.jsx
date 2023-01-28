import React, { useState, useEffect } from "react";
import SideNav from "./sideNav/sideNav";
import Editor from "./Editor/editor";
import data, { addNote, setData, getDate } from "../data";

export default function App() {
    const [notes, setNotes] = useState([{}]);

    const onNotesUpdate = (d) => {
        const newNote = {
            title: "Note Title...",
            content: "Note Body...",
            date: getDate(),
            tag: "Add Tag...",
        };
        console.log(notes);
        setNotes((prevState) => [newNote, ...prevState]);
    };

    useEffect(() => {
        //to retrive data
        const d = JSON.parse(localStorage.getItem("notes"));
        if (d) {
            console.log("Notes Retrived");
            setNotes(d);
        }
    }, []);

    useEffect(() => {
        //to Save data
        if (notes.length !== 1)
            localStorage.setItem("notes", JSON.stringify(notes));
        console.log("Notes Saved");
    }, [notes]);

    //to Handle cahnge in ID to display in editor
    const [contentID, changeContentID] = useState("0");

    const setID = (d) => {
        changeContentID(d);
        console.log(contentID);
    };

    const handleEdit = (editedNote) => {
        // let newNotes = notes;
        // newNotes[contentID] = editedNote;
        setNotes(
            notes.map((nte, id) =>
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
                id === contentID ? {...editedNote} : { ...nte }
            )
        );

        console.log(notes);
    };

    const handleDelete = ()=>{
        const beforeDelete = notes.slice(0, contentID);
        const afterDelete = notes.slice(contentID+1)
        const finalArray = beforeDelete.concat(afterDelete);

        console.log("deleting"+ contentID);
        setNotes(finalArray);
        changeContentID(0);
    }

    // handleDelete();

    return (
        <div className="body">
            <SideNav data={notes} onNotesChange={onNotesUpdate} getID={setID} />

            <Editor data={notes[contentID]} onEdit={handleEdit} onDel = {handleDelete}/>
        </div>
    );
}
