import './taqrirList.css';
import flowercontent from "../../assets/contentcardflower.png";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();
export default function taqrirList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const identifier = queryParams.get("identifier") || "Default Title";
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
  return (
    <div className='taqrirList'>
      <div className="main"></div>
      <h3>{identifier}</h3>

      {contentData.map((item) => (
        <Link
          to={`/taqrirView?index=${item.id}&itemtitle=${item.title}&from=${identifier}`}
          key={item.id}
          className="content-list"
        >
          <div className="content"  data-aos="fade-up"> 
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
      ))}
     

    </div>
  );
}
