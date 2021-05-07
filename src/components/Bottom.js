import React from 'react'
import Quote from './Quote'
import Settings from './Settings'
import BGCredits from './BGCredits'
import Todo from './Todo'
import '../styles/Bottom.css'

const Bottom = (props) => {
    return (
        <div className="bottom-row">

                  <div className="bottom-left">
                      <Settings></Settings>
                      {/* <BGCredits></BGCredits> */}
                      {props.children}
                  </div>
                  <div className="bottom-center">
                  <Quote></Quote>
                  </div>
                  <div className="bottom-right">
                      <Todo></Todo>
                  </div>
        </div>
    )
}

export default Bottom
