import Slider from "react-slick";
import "./books.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Aos from "aos";

export default function Book() {
  const [resalla, setResalla] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });

    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://ejazquran.space/api/v1/resealla/list"
        );

        if (!response.ok) throw new Error("Failed to fetch");

        const result = await response.json();

        if (result.success) {
          setResalla(result.data);
        } else {
          setError("No books found");
        }
      } catch (err) {
        setError("Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p className="center">Loading books...</p>;
  if (error) return <p className="center error">{error}</p>;

  return (
    <div className="mainBooks">
      <h1 data-aos="fade-up">رساله ها</h1>

      <div data-aos="fade-up" className="bookContainer">
        <Slider {...settings}>
          {resalla.map((book) => (
            <div key={book.id} className="book">
              <Link to={`/book/${book.id}`} className="booklink">
                <img
                  className="bookCover"
                  src={book.cover_url}
                  alt={book.name}
                  onError={(e) => (e.target.src = "/default-book.png")}
                />
                <h3>{book.name}</h3>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}