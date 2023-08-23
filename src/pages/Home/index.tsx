import React from "react";
import "./index.scss";

const Home: React.FC = () => {
  const articles = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ]
  return (
    <div className="home-view root">
      <div className="home-view-left">
        <div className="home-header card-shadow"></div>
        <div className="home-article-list">
          {
            articles.map((item, index) => {
              return <div key={index} className="article-item card-shadow">{item}</div>
            })
          }
        </div>
        <div style={{ height:50 }}></div>
      </div>
      <div className="home-view-right">
        <div className="home-person-side card-shadow"></div>
      </div>
    </div>
  );
};

export default Home;
