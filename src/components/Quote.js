import React from "react";
import "../styles/Quote.css";
import { useState, useEffect } from "react";
// import axios from 'axios';

const Quote = () => {
  const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  const [hoverQuote, setHoverQuote] = useState(false);
  // const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [quoteData, setQuoteData] = useState([]);
  // let [quoteData, setQuoteData] = useState();
  const [quote, setQuote] = useState('');

  const [quoteLoading, setQuoteLoading] = useState(true);

    //fetch tasks
    const fetchQuote = async () => {
      const res = await fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
              "method": "GET",
              "headers": {
                "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
                "x-rapidapi-host": "quotes15.p.rapidapi.com"
              }
            })
              setQuoteLoading(false);
      const data = await res.json()

  
      // console.log(data)
      return data
    }

    const shortQuote = (e) => {
if(e.length > 250){
  return (e.substring(0, 250) + "...");
}
return e;

}
    
  
    useEffect(() => {
      const getQuotes = async () => {
        const quoteFromApi = await fetchQuote()
        setQuoteData(quoteFromApi)
      }
  
      getQuotes()
    }, [])

  return (
    <div >
      {quoteData &&       
      <div className="test">
      <div className="quoteContainer quoteBlock">
        <div
          className="hoverQuote"
          onMouseOver={() => setHoverQuote(true)}
          onMouseOut={() => setHoverQuote(false)}
        >
{quoteLoading === true && <p><i class="fa fa-spinner spinLoading" aria-hidden="true"></i></p>}
          <p className={`quote ${hoverQuote ? "slideUp" : ""} ${quoteLoading ? "" : "fadeInAnim"} `} 
          
          >
          {/* {quoteLoading === false && <p >"{quoteData && quoteData.content}"</p>} */}
          {quoteLoading === false && <p >"{quoteData && quoteData.content && shortQuote(quoteData.content)}"</p>}
          {/* <p>{shortQuote(lorem)}</p> */}
          </p>
        </div>
      </div>
      <div>
        <div className="quoteContainer authorBlock">
          <div
            className="hoverQuote"
            onMouseOver={() => setHoverQuote(true)}
            onMouseOut={() => setHoverQuote(false)}
          >
            <div className={`author ${hoverQuote ? "slideDownFadeIn" : ""} ${quoteLoading ? "notLoaded" : ""}`}>
            {/* {console.log(quoteData.originator)} */}
            {/* {quoteData && quoteData.originator && quoteData.originator.name} <a href={quoteData.url}><i class="fa fa-external-link QuoteAuthorLink" aria-hidden="true"></i></a> */}

<span className={`${hoverQuote ? "TextSlideDownFadeIn" : ""}`}>{quoteData && quoteData.originator && quoteData.originator.name}</span> <a href={quoteData.url}><i class={`fa fa-external-link ${hoverQuote ? "TextSlideDownFadeIn" : ""}`} aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>

      </div>
}

    </div>
  );
};

export default Quote;
