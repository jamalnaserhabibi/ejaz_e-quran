import React, { useEffect, useState } from "react";
import "./whoweare.css";

export default function AboutSection() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://ejazquran.space/api/v1/about/sections")
      .then((res) => res.json())
      .then(async (listResult) => {
        const list = listResult.data || [];

        const fullData = await Promise.all(
          list.map(async (item) => {
            const res = await fetch(
              `https://ejazquran.space/api/v1/about/sections/${item.id}`,
            );
            const json = await res.json();
            return json.data;
          }),
        );

        setSections(fullData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "50px" }}>Loading...</p>;
  if (!sections.length) return <p style={{ padding: "50px" }}>No Data Found</p>;

  return (
    <div className="whoweare">
      <div className="main">
        {sections.map((section) => (
          <div key={section.id} className="about-block">
            <h3 className="titleOfTaqrir">
              <span dangerouslySetInnerHTML={{ __html: section.title }} />
            </h3>

            <div
              className="about-content"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
