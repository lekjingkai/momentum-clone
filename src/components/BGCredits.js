import React from 'react'
import '../styles/BGCredits.css'
import PropTypes from "prop-types";

const BGCredits = (props) => {
    return (
        <div className="settingContainer">
        <div className="BGCreditsContainer">
            <p className="BGtitle">Photo by</p>
            {/* <p className="BGauthor">{props.author}</p> */}
            <div className="BGauthorContainer"><a className="BGauthorLink" href={props.authorUrl}>{props.author}</a>&nbsp;<a href={props.url}><i class="fa fa-external-link BGauthorLink" aria-hidden="true"></i></a></div>

        </div>
        </div>
    )
}

BGCredits.propTypes = {
    author: PropTypes.string,
    url: PropTypes.string,
    authorUrl: PropTypes.string,
  };

export default BGCredits
