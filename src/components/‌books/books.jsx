import "./bookdownload.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Bookdownload() {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(
          `https://ejazquran.space/api/v1/resealla/${id}/document`
        );

        if (!response.ok) throw new Error("Failed to fetch book");

        const result = await response.json();

        if (result.success) {
          setBook(result.data);
        } else {
          setError("Book not found");
        }
      } catch (err) {
        setError("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p className="center">Loading book...</p>;
  if (error) return <p className="center error">{error}</p>;
  if (!book) return null;

  return (
    <div className="bookdownload">
      <h2 className="titleOfTaqrir">{book.name}</h2>

      <div className="content">
        <div className="bookinfo">
          <div className="textcard">
            <h4>نام کتاب: <span>{book.name}</span></h4>
            <h4>نویسنده: <span>{book.author}</span></h4>
            <h4>ناشر: <span>{book.publisher}</span></h4>
            <h4>سایز: <span>{book.size}</span></h4>
            <h4>فارمت: <span>{book.format}</span></h4>
          </div>

          <div className="imagecard">
            <img
              src={book.cover_url}
              alt={book.name}
              className="bookCoverLarge"
              onError={(e) => (e.target.src = "/default-book.png")}
            />
          </div>
        </div>

        {/* Download Button */}
        <a
          className="info"
          href={book.file_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          دانلود کتاب
        </a>
      </div>
    </div>
  );
}