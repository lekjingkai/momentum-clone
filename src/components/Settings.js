import React from 'react'
import '../styles/Settings.css'
import { useState, useEffect } from "react";

const Settings = () => {
    const [hoverRotate, sethoverRotate] = useState(false);

    return (
        <div className="settingContainer">
            <p className={`setting ${hoverRotate ? "rotateSetting" : ""}`}
                      onMouseOver={() => sethoverRotate(true)}
                      onMouseOut={() => sethoverRotate(false)}
                      >
                <i class="fa fa-cog settingIcon" aria-hidden="true"></i>
                </p>
        </div>
    )
}

export default Settings
