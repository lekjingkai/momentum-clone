import React from 'react'
import { useState, useEffect } from "react";
import '../styles/Search.css'
//https://www.google.com/search?q=gg

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [searchFocus, setSearchFocus] = useState(false);
    const [searchHover, setSearchHover] = useState(false);

    const checkValidation = (searchText) => {
        if(searchText === "" || searchText.match(/^ *$/) !== null){
            return false;
          }else{
            return true;
          }
      };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(checkValidation(searchInput) === true){
            // window.location.href = "https://www.google.com/search?q=" + searchInput
            window.location.href = `https://www.google.com/search?q=${searchInput}`
        }
    }

    return (
        <div>
    {/* <form onSubmit={handleSubmit} className="searchForm"> */}
    <form onSubmit={handleSubmit} className={`searchForm ${searchFocus ? "searchFormFocus" : ""}`}
                          onMouseOver={() => setSearchHover(true)}
                          onMouseOut={() => setSearchHover(false)}
                          >
      <label>
      <i className={`fa fa-search searchIcon ${searchHover ? "searchIconFocus" : ""} ${searchFocus ? "searchIconFocus" : ""}`} aria-hidden="true"></i>
        <input
        className="searchInput"
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />
<i className={`fa fa-google searchIcon ${searchFocus ? "searchIconFocus" : ""}`} aria-hidden="true"></i>
      </label>
    </form>
        </div>
    )
}

export default Search
