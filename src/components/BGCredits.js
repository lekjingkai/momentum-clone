import React from "react";
import "../styles/BGCredits.css";
import PropTypes from "prop-types";

const BGCredits = (props) => {
  return (
    <div className="BGCreditsContainer">
      <p>Photo by</p>
      <div className="BGauthorContainer">
        <a href={props.authorUrl}>{props.author}</a>
        <a href={props.url}>
          <i className="fa fa-external-link" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

BGCredits.propTypes = {
  author: PropTypes.string,
  url: PropTypes.string,
  authorUrl: PropTypes.string,
};

export default BGCredits;
