import "./hadithroz.css";
import madina from "../../assets/madina.jpg";
import line from "../../assets/linegreen.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();
export default function hadithroz() {
  return (
    <div className="hadithroz">
      <div className="contents">
        <div  className="elements">
          <div data-aos="fade-up" className="pic">
            <img src={madina} alt="" />
          </div>
          <div data-aos="fade-up" className="texts">
            <h1>مصداق حدیث شریف</h1>

            <h2 data-aos="fade-up">
              اَصْحابِی کَالنُّجُومِ بِاَیِّهِمْ اِقْتَدَیْتُمْ اهْتَدیْتُمْ
            </h2>
            <div data-aos="fade-up" className="line">
              <img className="imgline" src={line} alt="" />
            </div>
            <p data-aos="fade-up">
              مسافران شب، در مسیر راه، وقتی که جادّه اصلی را گم کردند، میلیونها
              ستاره در آسمان است، اگر هر کدام از آن ستاره‌ها را به دلخواه خود
              تعیین کنند، هرگز به راه هدایت، قرار نمی‌گیرند، بلکه ستاره‌های نشان
              دهنده جادّه اصلی، ستاره‌های مشخّص و شناخته‌ شده‌ای است، که مسافران
              می‌توانند، در پرتو نور و جهت‌گیری آنها، به جادّه اصلی، راه یابند.
              سافران شب، در مسیر راه، وقتی که جادّه اصلی را گم کردند، میلیونها
              ستاره در آسمان است، اگر هر کدام از آن ستاره‌ها را به دلخواه خود
              تعیین کنند، هرگز به راه هدایت، قرار نمی‌گیرند، بلکه ستاره‌های نشان
              دهنده جادّه اصلی، ستاره‌های مشخّص و شناخته‌ شده‌ای است، که مسافران
              می‌توانند، در پرتو نور و جهت‌گیری آنها، به جادّه اصلی، راه یابند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
