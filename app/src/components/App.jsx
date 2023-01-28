import React, { useState, useEffect } from "react";
import SideNav from "./sideNav/sideNav";
import Editor from "./Editor/editor";
import data, {addNote} from "../data";

export default function App() {
    const [contentID, changeContentID] = useState("0");

    const setID = (d) => {
        changeContentID(d);
        console.log(contentID);
    };

    return (
        <div className="body">
            <SideNav data={data} getID={setID} />

            <Editor data={data[contentID] } />
        </div>
    );
}
