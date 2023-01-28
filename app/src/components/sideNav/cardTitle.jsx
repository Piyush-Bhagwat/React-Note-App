import React from "react";

export default function CardTitle({ title, date }) {
    return (
        <div className="titleBox">
            <h3 className="overflowHide">{title}</h3>
            <p>{date}</p>
        </div>
    );
};
