import React, { useState } from 'react';
import './taqrirList.css';
import flowercontent from "../../assets/contentcardflower.png";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch } from 'react-icons/fa'; 
// Initialize AOS
AOS.init();

export default function TaqrirList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const identifier = queryParams.get("identifier") || "Default Title";

  // State for search query and filtered content
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);

  // Content data
  const contentData = [
    { id: 1, title: "تجلیل مولود شریف | قرآن-حدیث-صحابه" },
    { id: 2, title: "بی بی عایشه صدیقه رضی الله عنها" },
    { id: 3, title: "عنوان بحث مورد نظر 3" },
    { id: 4, title: "عنوان بحث مورد نظر 4" },
    { id: 5, title: "عنوان بحث مورد نظر 5" },
    { id: 6, title: "عنوان بحث مورد نظر 6" },
    { id: 7, title: "عنوان بحث مورد نظر 7" },
    { id: 8, title: "عنوان بحث مورد نظر 8" },
    { id: 9, title: "عنوان بحث مورد نظر 9" },
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter content based on the search query
    const filtered = contentData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContent(filtered);
  };

  // Use filtered content if there's a search query, otherwise use the full contentData
  const displayContent = searchQuery ? filteredContent : contentData;

  return (
    <div className='taqrirList'>
      <div className="main"></div>

      
      <div className="search-container" data-aos="fade-up">
        <input
          type="text"
          placeholder="جستجو..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            
          }}
        />
         <FaSearch className='icon'/>   
      </div>

      {identifier === "tafsirQuranBelQuran" ? (
        displayContent.map((item) => (
          <Link
            to={`/taqrirView?index=${item.id}&itemtitle=${item.title}&from=${identifier}`}
            key={item.id}
            className="content-list"
          >
            <div className="content" data-aos="fade-up">
              <img src={flowercontent} alt="" />
              <div className="text">
                <h5>{item.title}</h5>
              </div>
              <img
                style={{ transform: "rotate(180deg)" }}
                src={flowercontent}
                alt=""
              />
            </div>
          </Link>
        ))
      ) : (
        <div className="content about-us" data-aos="fade-up">
          <h1>درباره ما</h1>
          <p style={{ fontFamily: 'vazirmatn' }}>
            به ویب سایت اعجاز قرآن خوش آمديد، اعجاز قرآن نایاب ترین مباحث قرآنی منجمله اعجاز آن را که تا حال از آن سخن بمیان نیامده است،  در دسترس جهانیان بخصوص امت مسلمه قرار می‌دهد.
            جهان کنونی که به شدت تحت تأثیر سایه مادیات قرار گرفته بتدریج از معنویات (قرآن کریم ) فاصله گرفته و نزدیک است که ساینس و دنیای مادی را به خدایی بگیرد.
            "اعجاز قرآن" وب سایتی که توسط مدرسه خانقاء سلسله عالیه چشتیه محمدیﷺ  ناحیه هفتم شهر کابل افغانستان ایجاد گردیده است، می‌خواهد توازن معنویات و مادیات را از طریق بیان ارزش های معنوی بالخصوص اعجاز قرآنکریم ، جوابگو بودن قرآنکریم برای هر عصر، حل معما های لاینحل، برقرار نماید.
            این وب‌سایت بطور مستمر برای تنویر اذهان، تصحیح عقائد و اصلاح اعمال و اخلاق جامعه، نشرات صوتی، تصویری و تحریری را نشر و پخش می‌کند.
            وب سایت اعجاز قرآن تحت چتر قرآنکریم و حدیث شریف، (فقه حنفی و مسلک تصوف) تمام مباحث اعم از دینی و ساینسی را مطرح می‌کند.
            سنگ بنای این نهاد به تحقیق و تدقیق نهاده شده است.
            این نهاد برای استدلال خویش در قدم اول قرآن عظيم الشأن و در قدم بعدی به حديث صحيح استدلال می‌کند.<br />
            حديث صحيح همان حدیث است که قرآن عظيم آن را تایید کند و بالعکس حديث موضوعی همان حدیثی است که قرآنکریم آن را رد کند.<br />
            نهاد اعجاز قرآن چی تفاوتی با سایت های دیگر دارد
            <ul style={{ marginRight: "20px" }}>
              <li>بیان اعجاز علوم ظاهر، باطنی، نقوش، عددی و لدنی قرآن کریم</li>
              <li>بیان مصداق احادیث در ایات قرآنی</li>
              <li>بیان شامل بودن قرآن بر تمام علوم و اشیاء</li>
              <li>حل معما های که تا اکنون حل نشده است.</li>
            </ul>
            تا حال تمام موارد فوق الذکر بطور مفصل، جامع و مدلل بیان نشده است مگر بطور کلی، پراگنده و اقل من القليل،  اما وب سایت اعجاز قرآن به بیان سلسله وار مطالب مذکور متعهد است.
          </p>
        </div>
      )}
    </div>
  );
}