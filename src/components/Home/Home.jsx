import "./Home.css";
import bg from "../../assets/a.jpg";
// import besm from "../../assets/besmgreen.png";
import line from "../../assets/linegreen.png";
import Carousel from "react-bootstrap/Carousel";
import ToTop from '../toTop/toTop'
export default function Home() {
  const ayatTexts = [
    "وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً وَبُشْرَىٰ لِلْمُسْلِمِينَ",
    "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ",
    "كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنْكَرِ وَتُؤْمِنُونَ بِاللَّهِ", //best fit
    "لَوْ أَنْزَلْنَا هَذَا الْقُرْآنَ عَلَى جَبَلٍ لَرَأَيْتَهُ خَاشِعًا مُتَصَدِّعًا مِنْ خَشْيَةِ اللَّهِ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ",
  ];

  const paragraphTexts = [
    "به نام الله كه بخشنده به همه و مهربان به خواص است. بگو پناه مى برم به پروردگار مردم ",
    "طبع آدمى چنين است كه وقتى شرى به او متوجه مى شود و جان او را تهديد مى كند، و در خود نيروى دفع آن را نمى بيند به كسى پناهنده مى شود كه نيروى دفع آن را دارد",
    "به ربى پناه مى برد كه مدبر امر او و مربى او است ، و در تمامى حوائجش از كوچك و بزرگ به او رجوع مى كند، در اين هنگام هم كه چنين شرى متوجه او شده و بقاى او را تهديد مى كند", // best fit
    "و خداى سبحان رب مردم، و ملك آنان، و اله ايشان است، همچنان كه در كلام خويش اين سه صفت خود را جمع كرده فرموده : (ذلكم الله ربكم له الملك لا اله الا هو فانى تصرفون ))",
  ];
  return (
    <>
      <div className="mainContainer">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0, 0, 0,0.6), rgba(0, 0, 0,0.4)), url(${bg})`,
          }}
          className="main"
        >
          <div className="homeText">
            <div className="mainText">
              <h1 className="hometitle">اعجاز قرآنکریم</h1>
            </div>
            <div className="mainText0">
              <img src={line} alt="" />
            </div>
            <div className="DesText">
              <Carousel className="Homeslider"  interval={3000} slide={true}>
                {ayatTexts.map((ayat, index) => (
                  <Carousel.Item key={index}>
                    <h2 className="ayat">{ayat}</h2>
                    <p>{paragraphTexts[index]}</p>
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
      <ToTop/>
    </>
  );
}
