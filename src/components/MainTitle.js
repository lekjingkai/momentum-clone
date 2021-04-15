import React from 'react'
import NameField from './NameField'
import { useState, useEffect } from "react";
import {CurrentHour} from './TimeFunction'


const MainTitle = () => {
    const [firstName, setFirstName] = useState("Jing Kai");
    const [firstNameInput, setFirstNameInput] = useState(false);
    const [greeting, setGreeting] = useState("");

    const hour = CurrentHour(new Date().getHours());


        useEffect(() => {
        if(hour >= 0 && hour < 12){
            setGreeting("Good Morning");
    }else if(hour >= 12 && hour < 18){
        setGreeting("Good Afternoon");
    }else{
        setGreeting("Good Evening");
    }
      });


    return (
        <div>
            <NameField value = {firstName}
               inputChange = {(e) => setFirstName(e.target.value)}
               doubleClick = {() => setFirstNameInput(true)}
               blur = {() => setFirstNameInput(false)}
               active = {firstNameInput}><p style={{fontSize:"50px"}}>{greeting},&nbsp;</p></NameField>
        </div>
    )
}

export default MainTitle
