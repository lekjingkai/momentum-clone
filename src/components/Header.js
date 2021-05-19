import React from "react";
import "../styles/Header.css";
import Clock from "./Clock";
import MainTitle from "./MainTitle";
import MainFocus from "./MainFocus";
import Quote from "./Quote";
import Bottom from "./Bottom";
import Top from "./Top";
import Settings from "./Settings";
import BGCredits from "./BGCredits";
import Todo from "./Todo";
import Search from "./Search";
import Links from "./Links";
import Weather from "./Weather";
import { useState, useEffect } from "react";

const Header = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageData, setImageData] = useState([]);
  const [randomImageCount, setRandomImageCount] = useState(0);

  const queryArray = [
    "ocean",
    "forest",
    "beach",
    "mountain",
    "frozen",
    "outdoors",
    "clouds",
    "night%20sky",
    "space",
    "universe",
  ];

  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  //fetch image
  const fetchImage = async () => {
    const res = await fetch(
      `https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${random_item(
        queryArray
      )}&per_page=20&orientation=landscape`,
      {
        method: "GET",
        headers: {
          authorization: process.env.REACT_APP_PEXELS_KEY,
          "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
          "x-rapidapi-host": "PexelsdimasV1.p.rapidapi.com",
        },
      }
    );
    setImageLoading(false);
    const data = await res.json();
    // if(data.hasOwnProperty("error")){
    //   console.log("dee nusts")
    // }else{

    // }
    return data;
  };

  const getImages = async () => {
    const imageFromApi = await fetchImage();
    setImageData(imageFromApi);
    if (imageFromApi.photos.length > 0) {
      setRandomImageCount(
        Math.floor(Math.random() * imageFromApi.photos.length - 1)
      );
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  const leftBottomComponent = (
    <span style={{ display: "flex", width: "100%" }}>
      <Settings></Settings>
      {imageData && imageData.photos && imageData.photos[randomImageCount] && (
        <BGCredits
          author={imageData.photos[randomImageCount].photographer}
          authorUrl={imageData.photos[randomImageCount].photographer_url}
          url={imageData.photos[randomImageCount].url}
        ></BGCredits>
      )}
    </span>
  );

  const centerBottomComponent = <Quote />;

  const rightBottomComponent = <Todo />;

  const leftTopComponent = (
    <span style={{ display: "flex", width: "100%" }}>
      <Links></Links>
      <Search></Search>
    </span>
  );

  const rightTopComponent = <Weather />;

  return (
    <div className="wholeContainer">
      {imageData && (
        <div>
          {imageLoading === false && <div className={`gradient`}></div>}
          {imageData &&
            imageData.photos &&
            imageData.photos[randomImageCount] &&
            imageData.photos[randomImageCount].src && (
              <div
                className={`bg-image ${imageLoading ? "" : "fadeInAnim"}`}
                style={{
                  backgroundImage: `url(${imageData.photos[randomImageCount].src.large2x})`,
                }}
              ></div>
            )}
          <Top left={leftTopComponent} right={rightTopComponent} />
          <div className="headerContainer">
            <Clock />
          </div>
          <div className="headerContainer middleContent">
            <MainTitle />
            <MainFocus />
          </div>
          <Bottom
            left={leftBottomComponent}
            center={centerBottomComponent}
            right={rightBottomComponent}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
