import "./bookdownload.css";

import dalayel from "../../assets//books/dalayel.png";
import ziwar from "../../assets/books/ziwar.png";
import aqida from "../../assets/books/aqida.png"; 
import hazarhadith from "../../assets/books/hazarhadith.png"; 
import tafsir from "../../assets/books/tafsir.png"; 


import { useLocation } from "react-router-dom";
export default function Bookdownload() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookid = queryParams.get("bookid") || ".";
  const vol = queryParams.get("vol") || ".";
  const numberofvol = queryParams.get("numberofvol") || ".";
  const write = queryParams.get("write") || ".";
  const publish = queryParams.get("publish") || ".";
  const year = queryParams.get("year") || ".";
  const size = queryParams.get("size") || ".";
  const content = queryParams.get("content") || ".";
  const booktitle = queryParams.get("booktitle") || ".";

  return (
    <div className="bookdownload">
      <div className="main"></div>
        <h3 className="titleOfTaqrir">
         {booktitle}
        </h3>
      <div className="content">
        <div className="bookinfo">
          <div className="textcard">
            {/* <h4>کتاب: <span>{bookid}</span></h4> */}
            <h4>نام کتاب: <span>{booktitle}</span></h4>
            <h4>جلد: <span>{vol}</span></h4>
            {/* <h4>تعداد جلد: <span>{numberofvol}</span></h4> */}
            <h4>نویسنده: <span>{write}</span></h4>
            <h4>ناشر: <span>{publish}</span></h4>
            <h4>سال انتشار: <span>{year}</span></h4>
            <h4>سایز: <span>{size}</span></h4>
            <h4>فارمت: <span>pdf</span></h4>
            <h4>محتوا: <span>{content}</span></h4>
          </div>
          <div className="imagecard">
            {
            booktitle === "دلایل خیرات" ? (<img src={dalayel} alt="" />) : 
            booktitle === "هزار حدیث" ? (<img src={hazarhadith} alt="" />):
            booktitle === "زیور بهشتی" ? (<img src={ziwar} alt="" />) : 
            booktitle === "تفسیر کابلی" ? (<img src={tafsir} alt="" />) : 
            booktitle === "عقیده طحاوی" ? (<img src={aqida} alt="" />) : null}
          </div>
        </div>

        {[...Array(parseInt(numberofvol)).keys()].map((volIndex) => (
          <a key={volIndex} className="info" href={`/books/${booktitle}_vol${volIndex + 1}.pdf`} download={`${booktitle}_vol${volIndex + 1}.pdf`}>
            دانلود جلد {volIndex + 1}
          </a>
        ))}

      </div>
    </div>
  );
}
