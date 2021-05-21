import React from "react";
import "../styles/Links.css";
import "../styles/TextBubble.css";
import TextBubble from "./TextBubble";
import { useState, useEffect, useRef } from "react";

const Links = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [showLinkForm, setShowLinkForm] = useState(false);

  let focusInput = null;

  const checkLSLinks = (e) => {
    if (e === null) {
      return [];
    } else {
      const LSLinks = JSON.parse(e);
      return LSLinks;
    }
  };

  const [links, setLinks] = useState(checkLSLinks(localStorage.getItem("links")));

  const ref = useRef(null);

  //closes bubble if click anywhere outside ref
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowBubble(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  //add link function
  function Link({ link, index, removeLink }) {
    return (
      <div className="link">
        <a href={link.link} className={`link-content`}>
          <i className="fa fa-globe link-content" aria-hidden="true"></i>
          {link.name}
        </a>
        <button onClick={() => removeLink(index)}>
          <i className="fa fa-trash link-content" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  const addLink = (name, link) => {
    const newLinks = [...links, { name, link }];
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
    console.log(localStorage.getItem("links"));
  };

  const removeLink = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
  };

  function LinkForm({ addLink }) {
    const [linkName, setLinkName] = useState("");
    const [linkValue, setLinkValue] = useState("");

    const checkURL = (url) => {
      if (url === "") {
        return false;
      } else {
        const requirement = /^(http|https):\/\//;
        if (requirement.test(url) === false) {
          return false;
        } else {
          return true;
        }
      }
    };

    const handleSubmit = (e) => {
      console.log(localStorage.getItem("links"));
      e.preventDefault();
      if (!linkName || !linkValue) return;
      if (!linkName || !checkURL(linkValue)) return;
      addLink(linkName, linkValue);
      setLinkName("");
      setLinkValue("");
    };

    return (
      <form className={`linkForm ${showLinkForm ? "linkForm-show" : ""}`} onSubmit={handleSubmit}>
        <input
          ref={(input) => {
            focusInput = input;
          }}
          type="text"
          className="link-input link-content"
          value={linkName}
          placeholder="Name"
          onChange={(e) => setLinkName(e.target.value)}
        />
        <input type="text" className="link-input link-content" value={linkValue} placeholder="Link" onChange={(e) => setLinkValue(e.target.value)} />
        <input className="link-submit-btn" type="submit" value="Add Link"></input>
      </form>
    );
  }

  const addFirstLink = () => {
    setShowLinkForm(true);
    focusInput.focus();
  };

  return (
    <div ref={ref} className="linksContainer">
      <p className="links-btn" onClick={() => setShowBubble(!showBubble)}>
        <i className="fa fa-link" aria-hidden="true"></i>Links
      </p>
      <TextBubble bubbleClassName={`speech-bubble top-speech-bubble link-bubble ${showBubble ? "top-bubble-show" : ""}`}>
        <div>
          <div className="link-header">
            <h3 className="link-content">
              Saved Links
              <i className="fa fa-external-link link-content" aria-hidden="true"></i>
            </h3>
          </div>
          <div className="link-list">
            {links.length > 0 ? (
              links.map((link, index) => <Link key={index} index={index} link={link} removeLink={removeLink} />)
            ) : (
              <div className="no-link-container">
                <p className="link-content">Add a link to get started</p>
                <button className="no-link-btn" onClick={addFirstLink}>
                  New Link
                </button>
              </div>
            )}
            <button className="show-hide-addlink-btn link-content" onClick={() => setShowLinkForm(!showLinkForm)}>
              <i className={`fa ${showLinkForm ? "fa-minus" : "fa-plus"} link-content`} aria-hidden="true"></i>
              {showLinkForm ? "Close" : "Open"}
            </button>
            <LinkForm addLink={addLink} />
          </div>
        </div>
      </TextBubble>
    </div>
  );
};

export default Links;
