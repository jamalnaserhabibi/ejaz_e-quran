import React, { useEffect, useState } from "react";
import { FaCalculator, FaPenFancy, FaBook, FaSun, FaStar } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import "./whoweare.css"; 

export default function AboutSection() {
  const { id } = useParams();
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://ejazquran.space/api/v1/about/sections/${id}`)  //  http://127.0.0.1:8000/api/v1/about/sections
      .then((res) => res.json())
      .then((result) => {
        setSection(result.data);   // your API uses result.data
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: "50px" }}>Loading...</p>;

  if (!section) return <p style={{ padding: "50px" }}>No Data Found</p>;

  return (
    <div className="whoweare">
      <div className="main">
        <h3 className="titleOfTaqrir">
            {/* {section.title} */}
             <span
                  dangerouslySetInnerHTML={{
                    __html: (section.title)
                  }}
                />
        </h3>
        <p style={{ whiteSpace: "pre-line" }}>
             <span
                        dangerouslySetInnerHTML={{
                          __html: (section.content)
                        }}
                      />
          {/* {section.content} */}
        </p>
        {section?.section_key   == "who_we_are" && 
   
        <div className="content">
          <div className="features">
            <div className="feature">
              <FaCalculator className="icon" />
              <span>اعجاز عددی</span>
            </div>
            <div className="feature">
              <FaPenFancy className="icon" />
              <span>حروف و نقوش حروف </span>
            </div>
            <div className="feature">
              <FaBook className="icon" />
              <span>علوم باطنی</span>
            </div>
            <div className="feature">
              <FaSun className="icon" />
              <span>علوم لدنی</span>
            </div>
            <div className="feature">
              <FaStar className="icon" />
              <span>   علوم  اشاری قرآن کریم   </span>
            </div>
          </div>
        </div>
      
        }
      </div>
    </div>
  );
}
