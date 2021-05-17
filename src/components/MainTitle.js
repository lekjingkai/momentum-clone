import React from 'react'
import NameField from './NameField'
import { useState, useEffect } from "react";
import {CurrentHour} from './TimeFunction'
import Cookies from 'js-cookie'

const MainTitle = () => {
    // const [firstName, setFirstName] = useState(Cookies.get('name'));
    const [firstName, setFirstName] = useState(localStorage.getItem('name') || '');
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

    // localStorage.setItem('name', firstName);
      });

      useEffect(() => {
    localStorage.setItem('name', firstName);
      }, [firstName]);

    //   const changeName = (e) => {
    //     setFirstName(e)
    //     Cookies.set('name', e)
    //   };

    

    const changeName = (e) => {
        setFirstName(e)
        // localStorage.setItem('name', e);
      };

    return (
        <div>
            <NameField value = {firstName}
            //    inputChange = {(e) => setFirstName(e.target.value)}
            inputChange = {(e) => changeName(e.target.value)}
               doubleClick = {() => setFirstNameInput(true)}
               blur = {() => setFirstNameInput(false)}
               active = {firstNameInput}><p className="greetingText">{greeting},&nbsp;</p></NameField>
        </div>
    )
}

export default MainTitle
