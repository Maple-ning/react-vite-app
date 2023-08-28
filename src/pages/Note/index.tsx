import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, Tag, Carousel } from 'antd';
import { loadImage } from "@/utils/image";
import "./index.scss";

const Note: React.FC = () => {
  const list = [
    {
      url: "sky.jpg",
      name: "123",
    },
    {
      url: "book.jpg",
      name: "123",
    },
    {
      url: "book1.jpeg",
      name: "123",
    },
    {
      url: "yinianyongheng.jpg",
      name: "123",
    },
    {
      url: "sky.jpg",
      name: "123",
    },
    {
      url: "book.jpg",
      name: "123",
    },
  ];
  const navigate = useNavigate();
  const toDetail = () => navigate("/note/123");
  return <div className="note-view root">
    {
      list.map((item, index) => {
        return <div key={index} className="note-item" onClick={toDetail}>
          <div className="image-wrapper">
            <Image
              style={{ width: "100%" }}
              preview={false}
              src={loadImage(item.url)}
            />
          </div>
          <div className="detail-wrapper">
            <div className="article-title">JavaScript</div>
            <div className="article-publish-time">2023.05.14</div>
            <div className="article-intro">This is JavaScript Note</div>
          </div>
        </div>
      }
      )
    }
  </div>;
};

export default Note;
