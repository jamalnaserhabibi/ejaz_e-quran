import "./topics_card.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBook, FaSun, FaSearch, FaMicrophoneAlt } from 'react-icons/fa'; // Updated icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useTranslation } from 'react-i18next';
AOS.init();

export default function HadithRoz() {
    const { t, i18n } = useTranslation();
  const topics = [
    { 
      text: t("tafsirquran"), 
      effect: "fade-up", 
      icon: <FaBook size={70} className="icon" />, 
      link: "/taqrirList?identifier=tafsirQuranBelQuran" 
    },
    { 
      text:  t("halmoama"),
      effect: "fade-down", 
      icon: <FaSun size={70} className="icon" />, 
      link: "/taqrirList?identifier=halmoamaHaiQuran" 
    },
    { 
      text:  t("mesdaq"), 
      effect: "fade-up", 
      icon: <FaSearch size={70} className="icon" />, 
      link: "/taqrirList?identifier=mesdaqHadith" 
    },
    { 
      text:  t("dros"), 
      effect: "fade-down", 
      icon: <FaMicrophoneAlt size={70} className="icon" />, 
      link: "/taqrirList?identifier=DrosWaSokhanraniHa" 
    }
  ];

  return (
    <div className="topics_card">
      <div className="contents">
        <div data-aos="fade-up" className="topicsTitle">
          <h1>موضوعات که مارا متفاوت میسازد!</h1>
        </div>
        <div data-aos="fade-left" className="desc">
            <p> موارد ذیل تنها موارد است که تنها ما از  قرآن در دسترس داریم و جواب گوی تمام سوالات است که هنوز لاینحل مانده است موارد ذیل تنها موارد است که تنها ما از  قرآن در دسترس داریم و جواب گوی تمام سوالات است که هنوز لاینحل مانده است موارد ذیل تنها موارد است که تنها ما از  قرآن در دسترس داریم و جواب گوی تمام سوالات است که هنوز لاینحل مانده است </p>
            <p>با رفتن به صفحه مربوط بیشتر بدانید!</p>
          </div>
        <div className="elements">
          {topics.map((topic, index) => (
            <Link 
              key={index} 
              to={topic.link} 
              style={{ textDecoration: "none" }} 
            >
              <div data-aos={topic.effect} className="element-card">
                <div className="icon-wrapper">{topic.icon}</div>
                <div className="text">{topic.text}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}