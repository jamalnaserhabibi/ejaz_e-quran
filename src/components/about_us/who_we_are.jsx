import React from 'react';
import { FaCalculator, FaPenFancy, FaBook, FaLightbulb, FaStar } from 'react-icons/fa';
import "./whoweare.css"; 

export default function WhoWeAre() {
  return (
    <div className="whoweare">
      <div className="main">
        <h3 className="titleOfTaqrir">ما کیستیم؟</h3>
        <div className="content">
          <h4>نحمده و نصلی علی رسوله الکریم و بعد</h4>
          <p>
            به ویب سایت اعجاز قرآن خوش آمدید!
            <br />
             اعجاز قرآن نایاب ترین مباحث قرآنی منجمله اعجاز آن را که تا حال از آن سخن بمیان نیامده است، در دسترین جهانیان بخصوص امت مسلمه قرار می‌دهد.
            ویب سایت اعجاز قرآن فرصتی طلایی برای دسترسی به مباحث نایاب اعجاز قرآنی است که شامل:
          </p>
          <div className="features">
            <div className="feature">
              <FaCalculator className="icon" />
              <span>اعجاز عددی</span>
            </div>
            <div className="feature">
              <FaPenFancy className="icon" />
              <span>حروف و نقوش حروف </span>
            </div>
            <div className="feature">
              <FaBook className="icon" />
              <span>علوم باطنی</span>
            </div>
            <div className="feature">
              <FaLightbulb className="icon" />
              <span>علوم لدنی</span>
            </div>
            <div className="feature">
              <FaStar className="icon" />
              <span>اشاری قرآن کریم</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}