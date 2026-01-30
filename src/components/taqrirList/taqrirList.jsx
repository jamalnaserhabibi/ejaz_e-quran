import React, { useState, useEffect } from "react";
import "./taqrirList.css";
import flowercontent from "../../assets/contentcardflower.png";
import { useLocation, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaSpinner } from "react-icons/fa";
import axios from "axios";

AOS.init();

export default function TaqrirList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const identifier = queryParams.get("identifier") || "Default Title";

  const [searchQuery, setSearchQuery] = useState("");
  const [contentData, setContentData] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [childrenData, setChildrenData] = useState({});

  useEffect(() => {
    axios
      .get("https://ejazquran.space/api/v1/categories")
      .then((response) => {
        if (response.data.status === "success") {
          setContentData(response.data.data);
        } else {
          setError("Failed to load content");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading content. Please try again later.");
        setLoading(false);
      });
  }, []);
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = contentData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContent(filtered);
  };

  const displayContent = searchQuery ? filteredContent : contentData;

const toggleDropdown = async (id) => {
  setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));

  if (!childrenData[id]) {
    try {
      const res = await axios.get(`https://ejazquran.space/api/v1/category/${id}`);
       
      if (res.data.status === "success") {
        setChildrenData((prev) => ({
          ...prev,
          [id]: res.data.data.tafsirs || []
        }));
      }
    } catch (err) {
      console.error("Failed to fetch children for category", id);
    }
  }
};

  return (
    <div className="taqrirList">
      <div className="main"></div>

      <div className="search-container" data-aos="fade-up">
        <input
          type="text"
          placeholder="جستجو..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <FaSearch className="icon" />
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-animation">
            <FaSpinner className="spinner-icon" />
          </div>
          <p className="loading-subtext">لطفاً کمی صبر کنید!</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <h3>خطا در بارگذاری</h3>
          <p>{error}</p>
          <button className="retry-button" onClick={() => window.location.reload()}>
            تلاش مجدد
          </button>
        </div>
      ) : identifier === "tafsirQuranBelQuran" ? (
        displayContent.length > 0 ? (
          displayContent.map((item) => (
            <div key={item.id} className="content-list">
              <div
                className="content"
                data-aos="fade-up"
                onClick={() => toggleDropdown(item.id)}
              >
                <img src={flowercontent} alt="" />
                <div className="text">
                  <h5
  dangerouslySetInnerHTML={{
    __html: item.title,
  }}
/>
                </div>
                <img
                  style={{ transform: "rotate(180deg)" }}
                  src={flowercontent}
                  alt=""
                />
              </div>

              {/* Dropdown children */}
              {openDropdowns[item.id] && (
  <div className="child-dropdown">
    {childrenData[item.id]?.map((child,index) => (
      <Link
        key={child.id}
        to={`/taqrirView?index=${item.id}&itemId=${child.id}&itemtitle=${child.name}`}
        className="contentchild childdd"
        data-aos="fade-up"
      >
      <span
  dangerouslySetInnerHTML={{
    __html: `${index + 1}. ${child.name}`,
  }}
/>
      </Link>
    ))}
  </div>
)}
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>نتیجه‌ای یافت نشد</p>
          </div>
        )
      ) : (
        <div className="content about-us" data-aos="fade-up">
          <h1>درباره ما</h1>
          <p style={{ fontFamily: "vazirmatn" }}>
            به ویب سایت اعجاز قرآن خوش آمديد، اعجاز قرآن نایاب ترین مباحث قرآنی
            منجمله اعجاز آن را که تا حال از آن سخن بمیان نیامده است، در دسترس
            جهانیان بخصوص امت مسلمه قرار می‌دهد. جهان کنونی که به شدت تحت تأثیر
            سایه مادیات قرار گرفته بتدریج از معنویات (قرآن کریم ) فاصله گرفته و
            نزدیک است که ساینس و دنیای مادی را به خدایی بگیرد. "اعجاز قرآن" وب
            سایتی که توسط مدرسه خانقاء سلسله عالیه چشتیه محمدیﷺ ناحیه هفتم شهر
            کابل افغانستان ایجاد گردیده است، می‌خواهد توازن معنویات و مادیات را
            از طریق بیان ارزش های معنوی بالخصوص اعجاز قرآنکریم ، جوابگو بودن
            قرآنکریم برای هر عصر، حل معما های لاینحل، برقرار نماید. این وب‌سایت
            بطور مستمر برای تنویر اذهان، تصحیح عقائد و اصلاح اعمال و اخلاق
            جامعه، نشرات صوتی، تصویری و تحریری را نشر و پخش می‌کند. وب سایت
            اعجاز قرآن تحت چتر قرآنکریم و حدیث شریف، (فقه حنفی و مسلک تصوف) تمام
            مباحث اعم از دینی و ساینسی را مطرح می‌کند. سنگ بنای این نهاد به
            تحقیق و تدقیق نهاده شده است. این نهاد برای استدلال خویش در قدم اول
            قرآن عظيم الشأن و در قدم بعدی به حديث صحيح استدلال می‌کند.
            <br />
            حديث صحيح همان حدیث است که قرآن عظيم آن را تایید کند و بالعکس حديث
            موضوعی همان حدیثی است که قرآنکریم آن را رد کند.
            <br />
            نهاد اعجاز قرآن چی تفاوتی با سایت های دیگر دارد
            <ul style={{ marginRight: "20px" }}>
              <li>بیان اعجاز علوم ظاهر، باطنی، نقوش، عددی و لدنی قرآن کریم</li>
              <li>بیان مصداق احادیث در ایات قرآنی</li>
              <li>بیان شامل بودن قرآن بر تمام علوم و اشیاء</li>
              <li>حل معما های که تا اکنون حل نشده است.</li>
            </ul>
            تا حال تمام موارد فوق الذکر بطور مفصل، جامع و مدلل بیان نشده است مگر
            بطور کلی، پراگنده و اقل من القليل، اما وب سایت اعجاز قرآن به بیان
            سلسله وار مطالب مذکور متعهد است.
          </p>
        </div>
      )}
    </div>
  );
}