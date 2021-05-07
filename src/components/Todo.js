import React from 'react'
import '../styles/Todo.css'
import TextBubble from './TextBubble'
import { useState, useEffect } from "react";

const Todo = () => {
    const [showTodoBubble, setShowTodoBubble] = useState(false);

    return (
        <div className="todoContainer">

            <p className="todo" onClick={() => setShowTodoBubble(!showTodoBubble)}><i class="fa fa-list-ul" aria-hidden="true"></i> Todo</p>
            <TextBubble todoTextBubble={`speech-bubble bottom-speech-bubble todo-bubble ${showTodoBubble ? "speech-bubble-show" : ""}`}></TextBubble>
        </div>
    )
}

export default Todo
