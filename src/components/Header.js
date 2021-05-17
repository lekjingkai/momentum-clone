import React from "react";
import "../styles/Header.css";
//import testimage from "./assets/nature.jpg";
import testimage from "../assets/pexels-palu-malerba-2426546.jpg";
import Clock from './Clock'
import MainTitle from './MainTitle'
import MainFocus from './MainFocus'
import Quote from './Quote'
import Bottom from './Bottom'
import Top from './Top'
import BGCredits from './BGCredits'
import { useState, useEffect } from "react";
// import gg from 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg'
//563492ad6f91700001000001eb0bf777570041b38dd2e09f22d3ee56 api key
//Photo by Palu Malerba from Pexels
//https://www.pexels.com/@palumalerba?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels
//https://www.pexels.com/photo/green-leafed-plants-inside-greenhouse-2426546/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels
const Header = () => {
  const handleSectionClick = () => {
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  };

  const gg = "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg"

  const [imageLoading, setImageLoading] = useState(true);
  const [imageData, setImageData] = useState([]);
  const [imageCount, setImageCount] = useState('');
  const [randomImageCount, setRandomImageCount] = useState(0);

  const query = 'abstract';

  const queryArray = ['ocean','forest','beach','mountain','frozen','outdoors','clouds','night%20sky','space','universe'];
  const colorArray = ['green','turquoise','blue','orange'];

  function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

      //fetch tasks
      const fetchImage = async () => {
        // const res = await fetch("https://pexelsdimasv1.p.rapidapi.com/v1/search?query=nature&per_page=100&page=1", {
          const res = await fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${random_item(queryArray)}&per_page=20&orientation=landscape`, {
          "method": "GET",
          "headers": {
            "authorization": process.env.REACT_APP_PEXELS_KEY,
            "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
            "x-rapidapi-host": "PexelsdimasV1.p.rapidapi.com"
          }
        })
        setImageLoading(false);
        const data = await res.json()
  
    
        // console.log(data)
        // console.log(data.photos.length)
        return data
      }

      useEffect(() => {
        const getImages = async () => {
          const imageFromApi = await fetchImage()
          setImageData(imageFromApi)
          // console.log("useeffect " + imageFromApi.photos.length)
          if(imageFromApi.photos.length > 0){
            setRandomImageCount(Math.floor(Math.random() * imageFromApi.photos.length-1))
          }

          // setImageCount(Math.floor(Math.random() * imageData.photos.length-1))
          // setImageCount(imageFromApi.photos.length)
        }
    
        getImages()
        // console.log("image page is" + imageData.length)
        // Object.keys(data.shareInfo[i]).length
        // console.log("image count is" + Object.keys(imageData.photos[0]).length)

      }, [])

      // imageData && imageData.photos && console.log(imageData.photos.length)
      
      // imageData && imageData.photos && setImageCount(Math.floor(Math.random() * imageData.photos.length-1))
  
  return (
    <div>
{imageData &&
<div>
      {/* <div className="gradient"></div> */}
      {imageLoading === false && <div className={`gradient`}></div>}
      {imageData && imageData.photos && imageData.photos[randomImageCount] && imageData.photos[randomImageCount].src &&
      
      <div
        // className="image2"
        className={`image2 ${imageLoading ? "" : "fadeInAnim"}`}
        // style={{ backgroundImage: `url(${test})` }}
        style={{ backgroundImage: `url(${imageData.photos[randomImageCount].src.large2x})` }}
          >
            {/* {console.log("test 2 = " + imageCount)} */}
            {/* {imageData && imageData.photos && console.log(imageData.photos.length)} */}
            {/* {imageData && imageData.photos && imageData.photos[randomImageCount] && imageData.photos[randomImageCount].src && console.log(imageData.photos[randomImageCount].src.large2x)} */}
            {/* {imageData && imageData.photos && imageData.photos[Math.floor(Math.random() * imageData.photos.length-1)].src && console.log(imageData.photos[Math.floor(Math.random() * imageData.photos.length-1)].src.original) } */}
            {/* {imageData && imageData.photos && console.log("test " + imageCount)} */}
          </div>

      
          }
      <Top></Top>
      <div className="headerContainer">
        {/* <h1 className="header mainHeader">Explore Singapore</h1>
        <h2 className="header subHeader">Experience the Little Red Dot </h2>
        <p className="header headerText">
        A small dynamic, urban city full of culture, just waiting to be explored.
        </p>
        <button onClick={handleSectionClick} className="header-btn">Get Started</button> */}
              <Clock/>

      </div>
      <div className="headerContainer middleContent">
      <MainTitle></MainTitle>
<MainFocus></MainFocus>
      </div>

      <Bottom>
        {imageData && imageData.photos && imageData.photos[randomImageCount] &&
      <BGCredits author={imageData.photos[randomImageCount].photographer} authorUrl={imageData.photos[randomImageCount].photographer_url} url={imageData.photos[randomImageCount].url}></BGCredits>
    }
      </Bottom>
      </div>
}
    </div>
  );
};

export default Header;
