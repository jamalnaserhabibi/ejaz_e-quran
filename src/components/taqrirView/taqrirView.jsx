import "./taqrirView.css";
import samplepic from "../../assets/background2.jpg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import axios from "axios";

export default function TaqrirView() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tafsirId = queryParams.get("index");
  const itemId = queryParams.get("itemId");
  const itemtitle = queryParams.get("itemtitle") || "عنوان نامشخص";

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

  const [categoryTafsirs, setCategoryTafsirs] = useState([]);
  const [nextTafsir, setNextTafsir] = useState(null);

  // Fetch content based on the IDs
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchContent = async () => {
      try {
        setLoading(true);

        if (!itemId) {
          setError("آی دی مورد یافت نشد");
          return;
        }

        const response = await axios.post(
          `https://ejazquran.space/api/v1/tafsir/${itemId}`,
          { include_content: true },
        );

        if (response.data.status === "success") {
          const tafsirItem = response.data.data;

          if (tafsirItem) {
            setContent(tafsirItem.content || "");
            setAuzubillah(tafsirItem.auzubillah_text || "");
            setBismillah(tafsirItem.bismillah_text || "");
            setDuroodSharif(tafsirItem.durood_sharif_text || "");
            setTafsirImage(tafsirItem.tafir_image || "");
          } else {
            setError("محتوا یافت نشد");
          }
        } else {
          setError("خطا در بارگذاری محتوا");
        }
      } catch (err) {
        setError("خطا در اتصال به سرور");
        console.error("Error fetching tafsir:", err);
      } finally {
        setLoading(false);
      }
    };

    if (itemId) {
      fetchContent();
    } else {
      setError("آی دی تفسیر نامعتبر است");
      setLoading(false);
    }
  }, [itemId]);

  useEffect(() => {
    const fetchCategoryTafsirs = async () => {
      if (!tafsirId || !itemId) return;

      try {
        const res = await axios.get(
          `https://ejazquran.space/api/v1/category/${tafsirId}`,
        );

        if (res.data.status === "success") {
          const tafsirs = res.data.data.tafsirs || [];
          setCategoryTafsirs(tafsirs);

          const currentIndex = tafsirs.findIndex(
            (t) => String(t.id) === String(itemId),
          );

          if (currentIndex !== -1 && currentIndex < tafsirs.length - 1) {
            setNextTafsir(tafsirs[currentIndex + 1]);
          } else {
            setNextTafsir(null);
          }
        }
      } catch (err) {
        console.error("Failed to fetch category tafsirs", err);
      }
    };

    fetchCategoryTafsirs();
  }, [tafsirId, itemId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  // Split content into pages
  // Split content by visible wildcard $$$
  const textChunks = content
    ? content.split("$$$").filter((p) => p.trim() !== "")
    : [];
  const totalPages = textChunks.length;

  // Search functionality
  useEffect(() => {
    if (searchQuery && content) {
      const regex = new RegExp(searchQuery, "gi");
      let matches = [];
      textChunks.forEach((chunk, pageIndex) => {
        const chunkMatches = [...chunk.matchAll(regex)];
        chunkMatches.forEach((match) => {
          matches.push({ pageIndex, match });
        });
      });
      setSearchResults(matches);
      setCurrentMatchIndex(0);
      if (matches.length > 0) {
        setCurrentPage(matches[0].pageIndex);
      }
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, content]);

  const goToMatch = (index) => {
    if (index >= 0 && index < searchResults.length) {
      setCurrentMatchIndex(index);
      setCurrentPage(searchResults[index].pageIndex);
    }
  };
  const highlightHtml = (html, query) => {
    if (!query) return html;
    const regex = new RegExp(`(${query})`, "gi");
    return html.replace(regex, `<span style="background:yellow">$1</span>`);
  };
  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner-icon" />
        {/* <p>در حال بارگذاری تفسیر...</p> */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <h3>خطا</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>تلاش مجدد</button>
      </div>
    );
  }

  return (
    <div className="taqrirView">
      <div className="main"></div>
      <div className="titleoftaqrir">
        <div className="search-container">
          <input
            type="text"
            placeholder="جستجو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: "10px 20px",
              border: "1px solid var(--primary)",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              backgroundColor: "transparent",
              outline: "none",
              color: "var(--primary)",
            }}
          />
          <FaSearch className="icon" />
          {searchQuery && (
            <span className="search-results-count">
              {/* {searchResults.length} مورد یافت شد */}
            </span>
          )}
          {searchQuery && searchResults.length > 0 && (
            <div className="search-navigation">
              <button
                style={{
                  outline: "none",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                }}
                onClick={() => goToMatch(currentMatchIndex - 1)}
                disabled={currentMatchIndex === 0}
              >
                ►
              </button>
              <span>
                {currentMatchIndex + 1} از {searchResults.length}
              </span>
              <button
                style={{
                  outline: "none",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                }}
                onClick={() => goToMatch(currentMatchIndex + 1)}
                disabled={currentMatchIndex === searchResults.length - 1}
              >
                ◄
              </button>
            </div>
          )}
        </div>
        <h3 className="titleOfTaqrir">{itemtitle}</h3>
      </div>

      <div className="content">
        {/* <img src={samplepic} style={{width:"100%", height:"50vh", objectFit:'cover', borderRadius:"50px",padding:"10px 0"}} alt="" /> */}

        {currentPage === 0 && (
          <>
            {tafsirImage && (
              <img
                src={tafsirImage}
                style={{
                  width: "100%",
                  height: "50vh",
                  objectFit: "cover",
                  borderRadius: "50px",
                  padding: "20px 0",
                }}
                alt=""
              />
            )}
            {/* <img
  src={samplepic}
  style={{
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    borderRadius: "50px",
    padding: "20px 0",
  }}
  alt=""
/> */}

            <div
              style={{ textAlign: "center" }}
              className="headofcontent titleOfTaqrir"
            >
              {auzubillah && <h3>{auzubillah}</h3>}
              {bismillah && <h3>{bismillah}</h3>}

              {duroodSharif && <h4 className="mt-4">{duroodSharif}</h4>}
            </div>
          </>
        )}

        <div
          dangerouslySetInnerHTML={{
            __html: highlightHtml(textChunks[currentPage] || "", searchQuery),
          }}
        />
        {/* <p>{highlightText(textChunks[currentPage] || "", searchQuery)}</p> */}
      </div>

      {content && (
        <div className="pagination-controls">
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage === 0}
            style={{
              padding: "10px 15px",
              backgroundColor: currentPage ? "#9a6121" : "lightgray",
              color: "white",
              border: "1px solid #ddd",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            قبلی
          </button>

          <select
            className="page-selector"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <option key={i} value={i}>
                صفحه {i + 1}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === totalPages - 1}
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
              cursor:
                currentPage === totalPages - 1 ? "not-allowed" : "pointer",
              color: "white",
              backgroundColor:
                currentPage === totalPages - 1 ? "lightgray" : "#9a6121",
              opacity: currentPage === totalPages - 1 ? 0.6 : 1,
            }}
          >
            بعدی
          </button>
        </div>
      )}

      {currentPage === totalPages - 1 && nextTafsir && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={() =>
              (window.location.href = `/taqrirView?index=${tafsirId}&itemId=${nextTafsir.id}&itemtitle=${nextTafsir.name}`)
            }
            style={{
              padding: "10px 15px",
              backgroundColor: "#9a6121",
              color: "white",
              border: "none",
              borderRadius: "30px",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "5px",
            }}
          >
            بخش بعدی
          </button>
        </div>
      )}
    </div>
  );
}
