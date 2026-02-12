import "./Home.css";
import bg from "../../assets/background.jpg";
// import besm from "../../assets/besmgreen.png";
import Carousel from "react-bootstrap/Carousel";
import ToTop from "../toTop/toTop";
import { useState, useEffect } from "react";
export default function Home() {
  const [slider, setSlider] = useState([]);
const [background, setBackground] = useState("");

  useEffect(() => {

    const fetchBackground = async () => {
  try {
    const response = await fetch("https://ejazquran.space/api/v1/backgrounds");
    if (!response.ok) throw new Error("Failed to fetch background");
    const data = await response.json();

    
    setBackground(data.data[0].bg_image_url);
 
  } catch (err) {}
};

fetchBackground();


    const fetchSliders = async () => {
      try {
        const response = await fetch("https://ejazquran.space/api/v1/sliders");
        if (!response.ok) throw new Error("Failed to fetch documents");
        const data = await response.json();
        setSlider(data.data);

        // setFilteredDocs(data);
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchSliders();
  }, []);
  return (
    <>
      <div className="mainContainer">
        <div
          style={{
            backgroundImage: `
    linear-gradient(
      to bottom,
      rgba(0,0,0,0.35),
      rgba(0,0,0,0.15),
      rgba(0,0,0,0.05)
    ),
  url(${background || bg})


  `,
          }}
          className="main"
        >
          <div className="homeText">
            <div className="mainText">
              <h1 className="hometitle">اعجاز قرآن کریم</h1>
            </div>
            <div className="mainText0">{/* <img src={line} alt="" /> */}</div>
            <div className="DesText">
              <Carousel className="Homeslider" interval={10000} slide={true}>
                {slider.map((ayat, index) => (
                  <Carousel.Item key={index}>
                    <h2 className="ayat">{ayat.title}</h2>
                    <h2 className="ayat">{ayat.subtitle}</h2>
                    {/* <p>{paragraphTexts[index]}</p> */}
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <button className="home_btn">درس روز</button>
            {/* <div className="homeBoxes">
              <div className="boxes 1">
                <h1>آیکن</h1>
                <h2>متن لنک</h2>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <ToTop />
    </>
  );
}
