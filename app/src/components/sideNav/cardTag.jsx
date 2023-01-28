import React from "react";

export default function CardTag({ tag, isEditable }) {
    return <p contentEditable={isEditable} className="tag overflowHide">{tag}</p>;
}
