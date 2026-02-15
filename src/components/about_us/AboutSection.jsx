import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      </div>
    </div>
  );
}
