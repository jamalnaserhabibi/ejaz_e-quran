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
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredContent(filtered);
  };

  const displayContent = searchQuery ? filteredContent : contentData;

  const toggleDropdown = async (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));

    if (!childrenData[id]) {
      try {
        const res = await axios.get(
          `https://ejazquran.space/api/v1/category/${id}`,
        );

        if (res.data.status === "success") {
          setChildrenData((prev) => ({
            ...prev,
            [id]: res.data.data.tafsirs || [],
          }));
        }
      } catch (err) {
        console.error("Failed to fetch children for category", id);
      }
    }
  };

  return (
    <div className="taqrir-accordion-wrapper">
      <div className="taqrir-search-container" data-aos="fade-up">
        <input
          type="text"
          placeholder="جستجو..."
          value={searchQuery}
          onChange={handleSearch}
          className="taqrir-search-input"
        />
        <FaSearch className="taqrir-search-icon" />
      </div>

      <div className="taqrir-accordion-list">
        {displayContent.map((item) => (
          <div key={item.id} className="taqrir-accordion-card">
            <button
              className="taqrir-accordion-header"
              onClick={() => toggleDropdown(item.id)}
            >
              <div className="taqrir-header-left">
                <img src={flowercontent} alt="" />
                <h5 dangerouslySetInnerHTML={{ __html: item.title }} />
              </div>

              <span
                className={`taqrir-chevron ${openDropdowns[item.id] ? "open" : ""}`}
              >
                ▼
              </span>
            </button>

            <div
              className={`taqrir-accordion-body ${
                openDropdowns[item.id] ? "open" : ""
              }`}
            >
              {!childrenData[item.id] ? (
                <div className="taqrir-loading">در حال نمایش...</div>
              ) : (
                childrenData[item.id].map((child) => (
                  <Link
                    key={child.id}
                    to={`/taqrir/${item.id}/${child.id}`}
                    className="taqrir-child-item"
                  >
                    <span dangerouslySetInnerHTML={{ __html: child.name }} />
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
