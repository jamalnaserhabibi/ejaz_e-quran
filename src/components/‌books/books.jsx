import Slider from "react-slick";
import "./books.css";
import "aos/dist/aos.css";
import dalayel from "../../assets//books/dalayel3d.png";
import ziwar from "../../assets/books/ziwar3d.png";
import aqida from "../../assets/books/aqida3d.png"; 
import hazarhadith from "../../assets/books/hazarhadith3d.png"; 
import tafsir from "../../assets/books/tafsir3d.png"; 

// import "../../assets/dalayel.png";
import { Link } from 'react-router-dom';

import Aos from "aos";
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";
Aos.init();

export default function Book() {

  const books = 
  [
    { 
      id: 1, 
      title: "عقیده طحاوی",
      bimage: aqida,
      write: "محمد بن حسن طحاوی",
      publish: "ناشر",
      year: "سال انتشار",
      size: "سایز کتاب",
      content: " محتویات در مورد کتاب عقیده طحاوی محتویات در مورد کتاب عقیده طحاوی محتویات در مورد کتاب عقیده طحاوی محتویات در مورد کتاب عقیده طحاوی",
      numberofvol:1,
      vol:1,
    },
    { 
      id: 2, 
      title: "هزار حدیث",
      bimage: hazarhadith,
      write: "...",
      publish: "احمد",
      year: "1401",
      size: "2.3 MB",
      content: " محتویات در مورد کتاب هزار حدیث محتویات در مورد کتاب هزار حدیث محتویات در مورد کتاب هزار حدیث محتویات در مورد کتاب هزار حدیث",
      numberofvol:1,
      vol:1,
    },
    { 
      id: 3, 
      title: "دلایل خیرات",
      bimage: dalayel,
      write: "...",
      publish: "احمد",
      year: "1401",
      size: "1.3 MB",
      content: " محتویات در مورد کتاب دلایل خیرات محتویات در مورد کتاب دلایل خیرات محتویات در مورد کتاب دلایل خیرات محتویات در مورد کتاب دلایل خیرات",
      numberofvol:1,
      vol:1,
    },
    { 
      id: 4, 
      title: "تفسیر کابلی",
      bimage: tafsir,
      write: "...",
      publish: "احمد",
      year: "1401",
      size: "4.3 MB",
      content: " محتویات در مورد کتابتفسیر کابلی محتویات در مورد کتابتفسیر کابلی محتویات در مورد کتابتفسیر کابلی محتویات در مورد کتاب تفسیر کابلی",
      numberofvol:3,
      vol:1,
    },
    { 
      id: 5, 
      title: "زیور بهشتی",
      bimage: ziwar,
      write: "...",
      publish: "احمد",
      year: "1401",
      size: "5.3 MB",
      content: " محتویات در مورد کتاب  زیور بهشتی محتویات در مورد کتاب زیور بهشتی محتویات در مورد کتاب زیور بهشتی محتویات در مورد کتاب  زیور بهشتی",
      numberofvol:4,
      vol:1,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mainBooks">
      <h1 data-aos="fade-up">کتاب ها</h1>
      <div data-aos="fade-up" className="bookContainer">
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="book">
            <Link
              to={`/bookdownload?bookid=${book.id}&booktitle=${book.title}&write=${book.write}&publish=${book.publish}&year=${book.year}&size=${book.size}&content=${book.content}&numberofvol=${book.numberofvol}&vol=${book.vol}`}
              className="booklink"
            >
                <img className="bookCover" src={book.bimage} alt="" />
                <h3>{book.title}</h3>
            </Link>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
