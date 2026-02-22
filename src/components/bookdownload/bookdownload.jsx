import "./bookdownload.css";
import { useLocation } from "react-router-dom";

export default function Bookdownload() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Provide default values for all parameters
  const bookData = {
    id: queryParams.get("bookid") || "1",
    title: queryParams.get("booktitle") || "Unknown Book",
    vol: queryParams.get("vol") || "1",
    numberofvol: queryParams.get("numberofvol") || "1",
    write: queryParams.get("write") || "Unknown Author",
    publish: queryParams.get("publish") || "Unknown Publisher",
    size: queryParams.get("size") || "Unknown Size",
    content: queryParams.get("content") || "No description available",
  };

  return (
    <div className="bookdownload">
      <div className="main"></div>
      <h3 className="titleOfTaqrir">{bookData.title}</h3>
      <div className="content">
        <div className="bookinfo">
          <div className="textcard">
            <h4>نام کتاب: <span>{bookData.title}</span></h4>
            <h4>جلد: <span>{bookData.vol}</span></h4>
            <h4>نویسنده: <span>{bookData.write}</span></h4>
            <h4>ناشر: <span>{bookData.publish}</span></h4>
            <h4>سایز: <span>{bookData.size}</span></h4>
            <h4>فارمت: <span>pdf</span></h4>
            <h4>محتوا: <span>{bookData.content}</span></h4>
          </div>
          <div className="imagecard">
            {/* You can add a default image or handle dynamically if needed */}
            <div className="book-image-placeholder"></div>
          </div>
        </div>

        {[...Array(parseInt(bookData.numberofvol)).keys()].map((volIndex) => (
          <a 
            key={volIndex} 
            className="info" 
            href={`/books/${bookData.title.replace(/\s+/g, '_')}_vol${volIndex + 1}.pdf`} 
            download={`${bookData.title.replace(/\s+/g, '_')}_vol${volIndex + 1}.pdf`}
          >
            دانلود جلد {volIndex + 1}
          </a>
        ))}
      </div>
    </div>
  );
}