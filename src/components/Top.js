import React from 'react'
import Quote from './Quote'
import Settings from './Settings'
import BGCredits from './BGCredits'
import Todo from './Todo'
import Search from './Search'
import '../styles/Top.css'
import Links from './Links'
import Weather from './Weather'

const Top = () => {
    return (
        <div className="top-row">

                  <div className="top-left">
                      {/* <Settings></Settings>
                      <BGCredits></BGCredits> */}
                      <Links></Links>
<Search></Search>
                  </div>
                  <div className="top-center">
                  {/* <div className="speech-bubble">lol</div> */}
                  </div>
                  <div className="top-right">
                      {/* <Todo></Todo> */}
                      <Weather></Weather>
                  </div>

        </div>
    )
}

export default Top
