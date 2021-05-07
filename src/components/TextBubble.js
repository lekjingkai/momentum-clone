import React from 'react'
import '../styles/TextBubble.css'

const TextBubble = (props) => {
    return (
        <div className={props.todoTextBubble}>
            <p className="speech-bubble-text">hi</p>
        </div>
    )
}

export default TextBubble
