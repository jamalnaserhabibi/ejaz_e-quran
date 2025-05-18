import "./taqrirView.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import axios from "axios";

export default function TaqrirView() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tafsirId = queryParams.get("index"); // The main tafsir ID from URL
  const itemId = queryParams.get("itemId"); // The specific tafsir item ID
  const itemtitle = queryParams.get("itemtitle") || "عنوان نامشخص";

  const wordsPerPage = 350;

  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch content based on the IDs
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://ejazquran.space/api/v1/tafsirs`);
        
        if (response.data.status === "success") {
          // Find the specific tafsir by ID
          const tafsirCategory = response.data.data.find(t => t.id === parseInt(tafsirId));
          
          if (tafsirCategory) {
            // Find the specific tafsir item by ID or by name
            const tafsirItem = itemId 
              ? tafsirCategory.tafsirs.find(t => t.id === parseInt(itemId))
              : tafsirCategory.tafsirs.find(t => t.name === itemtitle);
            
            if (tafsirItem) {
              setContent(tafsirItem.content || "");
            } else {
              setError("محتوا یافت نشد");
            }
          } else {
            setError("دسته بندی تفسیر یافت نشد");
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

    if (tafsirId) {
      fetchContent();
    } else {
      setError("آی دی تفسیر نامعتبر است");
      setLoading(false);
    }
  }, [tafsirId, itemId, itemtitle]);

  // Split content into pages
  const textChunks = content ? content.split(/\s+/).reduce((acc, word, index) => {
    const chunkIndex = Math.floor(index / wordsPerPage);
    if (!acc[chunkIndex]) acc[chunkIndex] = [];
    acc[chunkIndex].push(word);
    return acc;
  }, []).map(chunk => chunk.join(' ')) : [];

  const totalPages = textChunks.length;

  // Search functionality
  useEffect(() => {
    if (searchQuery && content) {
      const regex = new RegExp(searchQuery, 'gi');
      let matches = [];
      textChunks.forEach((chunk, pageIndex) => {
        const chunkMatches = [...chunk.matchAll(regex)];
        chunkMatches.forEach(match => {
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

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) =>
      regex.test(part)
        ? <span key={i} style={{ backgroundColor: 'yellow' }}>{part}</span>
        : part
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
        <button onClick={() => window.location.reload()}>
          تلاش مجدد
        </button>
      </div>
    );
  }

  return (
    <div className="taqrirView">
      <div className="main"></div>
      <h3 className="titleOfTaqrir">{itemtitle}</h3>

      <div className="search-container" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', width:'70%' }}>
        <input
          type="text"
          placeholder="جستجو..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
         
          style={{
            width: '100%',
            padding: '10px 20px',
            borderRadius: '30px',
            border: '1px solid var(--primary)',
            backgroundColor: 'transparent',
            outline: 'none',
            color: 'var(--primary)',
          }}
        />
        <FaSearch className="icon" />
        {searchQuery && (
          <span className="search-results-count">
            {searchResults.length} مورد یافت شد
          </span>
        )}
        {searchQuery && searchResults.length > 0 && (
          <div className="search-navigation">
            <button
              onClick={() => goToMatch(currentMatchIndex - 1)}
              disabled={currentMatchIndex === 0}
            >
              قبلی
            </button>
            <span>{currentMatchIndex + 1} از {searchResults.length}</span>
            <button
              onClick={() => goToMatch(currentMatchIndex + 1)}
              disabled={currentMatchIndex === searchResults.length - 1}
            >
              بعدی
            </button>
          </div>
        )}
      </div>

      <div className="content">
        <p>{highlightText(textChunks[currentPage] || "", searchQuery)}</p>
      </div>

      {content && (
        <div className="pagination-controls">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 0}
            style={{
              padding: '10px 15px',
              backgroundColor: currentPage ? 'green' : 'lightgray',
              color: 'white',
              border: '1px solid #ddd',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            قبلی
          </button>

          <select className="page-selector"
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <option key={i} value={i}>صفحه {i + 1}</option>
            ))}
          </select>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            style={{
              padding: '10px 15px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              appearance: 'none',
              backgroundColor: 'rgba(0, 128, 0, 0.200)',
            }}
          >
            بعدی
          </button>
        </div>
      )}
    </div>
  );
}