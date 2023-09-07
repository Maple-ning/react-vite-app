import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadImage } from "@/utils/image";
import { getHomeRecommend, getHomeList } from "@/api/home";
import "./index.scss";
import { Image, Tag, Carousel } from "antd";

const Home: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    getHomeRecommend().then((res) => {
      if (res.code === 200) {
        setPictures(res.data);
      }
    });
    getHomeList().then((res) => {
      if (res.code === 200) {
        setArticles(res.data);
      }
    });
  }, []);

  const navigate = useNavigate();

  const letsGo = () => {
    const element: any = document.getElementById("read");
    element.scrollIntoView({
      // 滚动到可视区域
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }

  const toDetail = (name: string) => {
    navigate(`/article/${name}`);
  };

  return (
    <>
      <div className="home-bg">
        <div className="welcome-title">欢迎来到我的博客</div>
        <div className="start-read" onClick={letsGo}>开启我的阅读之旅</div>
      </div>
      <div className="root">
        <div className="home-view card-shadow" id="read">
          {/* 头部轮播图  */}
          <div className="home-header">
            <Carousel autoplay dots={{ className: "home-dots" }}>
              {pictures.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="carousel-box"
                  >
                    <div className="info-wrapper">
                      <div className="info-box">
                        <div className="info-type">
                          <Tag color="#0000004d">前端</Tag>
                        </div>
                        <div className="info-title">JavaScript</div>
                        <div className="info-time">2023.09.07</div>
                      </div>
                    </div>
                    <img className="basic-img" src={loadImage(item.image)} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          {/* 文章列表 */}
          <div className="home-article-list card-shadow">
            {articles.map((item, index) => {
              return (
                <div
                  key={index}
                  className="article-item card-shadow"
                  onClick={() => toDetail(item.name)}
                >
                  <div className="article-info">
                    <div className="article-type">
                      <Tag color="#0000004d">{item.type}</Tag>
                    </div>
                    <div className="article-introduction">{item.name}</div>
                  </div>
                  <Image
                    style={{ width: "100%" }}
                    preview={false}
                    className="article-image"
                    src={loadImage(item.url)}
                  />
                </div>
              );
            })}
          </div>
          <div style={{ height: 50 }}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
