import "./topics_card.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();
export default function hadithroz() {
  
  return (
    <div className="topics_card">
      <div  className="contents">
        <div data-aos="fade-up" className="topicsTitle">
          <h1>موضوعات که مارا متفاوت میسازد!</h1>
        </div>
        <div className="elements">
          <div data-aos="fade-up" data-aos-delay="100">
          تفسیرالقرآن بالقرآن والحدیث
          </div>
          <div data-aos="fade-up" data-aos-delay="200" >
          حل معما های قرآنکریم
          </div>
          <div data-aos="fade-up" data-aos-delay="300" >
          مصداق احادیث
          </div>
          <div data-aos="fade-up" data-aos-delay="400" >         
دروس و سخنرانی ها

          </div>
        </div>
      </div>
    </div>
  );
}
