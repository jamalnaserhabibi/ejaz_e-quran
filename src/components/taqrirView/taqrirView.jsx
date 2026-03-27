import "./taqrirView.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaSearch, FaSpinner, FaShareAlt, FaBookmark } from "react-icons/fa";
import axios from "axios";

export default function TaqrirView() {
  const { categoryId, itemId } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [auzubillah, setAuzubillah] = useState("");
  const [bismillah, setBismillah] = useState("");
  const [duroodSharif, setDuroodSharif] = useState("");
  const [tafsirImage, setTafsirImage] = useState("");

  const contentRef = useRef(null);

  const siteUrl = `https://ejazquran.net/taqrir/${categoryId}/${itemId}`;
  const BOOKMARK_KEY = `taqrir-bookmark-${itemId}`;

  const pages = content ? content.split("$$$").filter((p) => p.trim()) : [];

  // LOAD BOOKMARK (PAGE + SCROLL)
  useEffect(() => {
    const savedPage = localStorage.getItem(BOOKMARK_KEY);
    if (savedPage !== null) setCurrentPage(Number(savedPage));
  }, [itemId]);

  // RESTORE SCROLL AFTER LOAD
  useEffect(() => {
    if (!loading) {
      const savedScroll = localStorage.getItem(`${BOOKMARK_KEY}-scroll`);
      if (savedScroll) {
        window.scrollTo(0, Number(savedScroll));
      }
    }
  }, [loading, currentPage]);

  // SAVE PAGE
  useEffect(() => {
    localStorage.setItem(BOOKMARK_KEY, currentPage);
  }, [currentPage]);

  // FETCH DATA
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchContent = async () => {
      try {
        setLoading(true);

        const res = await axios.post(
          `https://ejazquran.space/api/v1/tafsir/${itemId}`,
          { include_content: true },
        );

        if (res.data.status === "success") {
          const t = res.data.data;
          setTitle(t.name || t.title || "");
          setContent(t.content || "");
          setAuzubillah(t.auzubillah_text || "");
          setBismillah(t.bismillah_text || "");
          setDuroodSharif(t.durood_sharif_text || "");
          setTafsirImage(t.tafir_image || "");
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

  // SHARE TEXT
  const getPlainText = () => {
    if (!pages[0]) return "";
    let text = pages[currentPage].replace(/<[^>]+>/g, "");
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    text = textarea.value;
    return text.replace(/\s+/g, " ").trim().slice(0, 1000);
  };

  const handleShare = async () => {
    const shareData = {
      title,
      text: getPlainText(),
      url: siteUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${getPlainText()}\n\n${siteUrl}`);
        alert("کپی شد  ");
      }
    } catch {}
  };

  // HIGHLIGHT SEARCH
  const highlightHtml = (html, query) => {
    if (!query) return html;
    const regex = new RegExp(`(${query})`, "gi");
    return html.replace(regex, `<span class="highlight">$1</span>`);
  };

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
      {/* HEADER */}
      <div className="titleoftaqrir">
        {/* SEARCH LEFT */}
        <div className="search-container">
          <FaSearch
            className="icon"
            onClick={() => setShowSearch((prev) => !prev)}
          />

          <input
            className={showSearch ? "show" : ""}
            type="text"
            placeholder="جستجو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* TITLE CENTER */}
        <h3 className="titleOfTaqrir">{title}</h3>
      </div>

      {/* CONTENT */}
      <div className="content" ref={contentRef}>
        {/* SOCIAL */}
        <div className="socialLinks">
          <button className="shareBtn" onClick={handleShare}>
            <FaShareAlt />
          </button>

          <button
            className="bookmarkBtn"
            onClick={() => {
              localStorage.setItem(BOOKMARK_KEY, currentPage);
              localStorage.setItem(`${BOOKMARK_KEY}-scroll`, window.scrollY);
              alert("نشانی ذخیره شد");
            }}
          >
            <FaBookmark />
          </button>
        </div>

        {/* HEADER CONTENT */}
        {currentPage === 0 && (
          <>
            {tafsirImage && (
              <img src={tafsirImage} alt="" className="tafsirImage" />
            )}

            <div className="headofcontent">
              {auzubillah && <h3>{auzubillah}</h3>}
              {bismillah && <h3>{bismillah}</h3>}
              {duroodSharif && <h4>{duroodSharif}</h4>}
            </div>
          </>
        )}

        {/* PAGE CONTENT */}
        <div
          dangerouslySetInnerHTML={{
            __html: highlightHtml(pages[currentPage] || "", searchQuery),
          }}
        />
      </div>
    </div>
  );
}
