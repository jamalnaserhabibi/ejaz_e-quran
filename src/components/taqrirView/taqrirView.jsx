import "./taqrirView.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import axios from "axios";

export default function TaqrirView() {

 

  const navigate = useNavigate();

 const { categoryId, itemId } = useParams();
const [title, setTitle] = useState("");


  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [auzubillah, setAuzubillah] = useState("");
  const [bismillah, setBismillah] = useState("");
  const [duroodSharif, setDuroodSharif] = useState("");
  const [tafsirImage, setTafsirImage] = useState("");
  const [tafsir_image_height, setTafsir_image_height] = useState("");

  const [nextTafsir, setNextTafsir] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchContent = async () => {
      try {
        setLoading(true);
        const res = await axios.post(
          `https://ejazquran.space/api/v1/tafsir/${itemId}`,
          { include_content: true }
        );
        if (res.data.status === "success") {
          
          const t = res.data.data;
          setTitle(t.name || t.title || "");
          setContent(t.content || "");
          setAuzubillah(t.auzubillah_text || "");
          setBismillah(t.bismillah_text || "");
          setDuroodSharif(t.durood_sharif_text || "");
          setTafsirImage(t.tafir_image || "");
          setTafsir_image_height(t.tafsir_image_height || "50");
          
        } else {
          setError("محتوا یافت نشد");
        }
      } catch {
        setError("خطا در اتصال به سرور");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [itemId]);

  const pages = content
    ? content.split("$$$").filter(p => p.trim())
    : [];
// SEARCH EFFECT (RESTORED)
useEffect(() => {
  if (!searchQuery || !content) {
    setSearchResults([]);
    return;
  }

  const regex = new RegExp(searchQuery, "gi");
  const matches = [];

  pages.forEach((page, pageIndex) => {
    const found = [...page.matchAll(regex)];
    found.forEach(match => {
      matches.push({ pageIndex, match });
    });
  });

  setSearchResults(matches);

  if (matches.length > 0) {
    setCurrentMatchIndex(0);
    setCurrentPage(matches[0].pageIndex);
  }
}, [searchQuery, content]);
const highlightHtml = (html, query) => {
  if (!query) return html;
  const regex = new RegExp(`(${query})`, "gi");
  return html.replace(
    regex,
    `<span style="background:yellow">$1</span>`
  );
};
// AUTO SCROLL ON PAGE CHANGE OR SEARCH
useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage, searchQuery]);

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner-icon" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <h3>خطا</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="taqrirView">

     
      <div className="main"></div>

      
      <div className="titleoftaqrir">
        <div className="search-container">
          <input
          style={{
            
            width: "250px",
        padding: "10px 20px",
        border: "none",
        borderBottom: "1px solid var(--primary)",
        backgroundColor: "transparent",
        outline: "none",
        // font-size: 16px;
          }}
          id="input"
            type="text"
            placeholder="جستجو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="icon" />
        </div>
<h3 className="titleOfTaqrir">{title}</h3>

        {/* <h3 className="titleOfTaqrir">{itemtitle}</h3> */}
      </div>

      {/* CONTENT */}
      <div className="content">

        {currentPage === 0 && (
          <>
            {tafsirImage && (
              <img
                src={tafsirImage}
                style={{
                  width: "100%",
                  // height: tafsir_image_height + "vh",
                  objectFit: "cover",
                  borderRadius: "50px",
                  padding: "20px 0",
                }}
                alt=""
              />
            )}

            <div style={{ textAlign: "center" }} className="headofcontent titleOfTaqrir">
              {auzubillah && <h3>{auzubillah}</h3>}
              {bismillah && <h3>{bismillah}</h3>}
              {duroodSharif && <h4 className="mt-4">{duroodSharif}</h4>}
            </div>
          </>
        )}

    <div
  dangerouslySetInnerHTML={{
    __html: highlightHtml(pages[currentPage] || "", searchQuery),
  }}
/>

      </div>

      {/* PAGINATION */}
      {content && (
        <div className="pagination-controls">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(p => p - 1)}
          >
            قبلی
          </button>

          <select
            className="page-selector"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {pages.map((_, i) => (
              <option key={i} value={i}>
                صفحه {i + 1}
              </option>
            ))}
          </select>

          <button
            disabled={currentPage === pages.length - 1}
            onClick={() => setCurrentPage(p => p + 1)}
          >
            بعدی
          </button>
        </div>
      )}

      {/* NEXT TAFSIR */}
      {currentPage === pages.length - 1 && nextTafsir && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={() =>
              navigate(`/taqrir/${categoryId}/${nextTafsir.id}`)

            }
          >
            بخش بعدی
          </button>
        </div>
      )}
    </div>
  );
}
