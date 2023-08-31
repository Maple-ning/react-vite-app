import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from 'antd';
import { getHomeList } from "@/api/home";
import { loadImage } from "@/utils/image";
import "./index.scss";

const Note: React.FC = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getHomeList().then((res) => {
      if (res.code === 200) {
        setList(res.data);
      }
    })
  }, []);

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
            <div className="article-title">{item.name}</div>
            <div className="article-publish-time">{item.name}</div>
            <div className="article-intro">{item.introduce}</div>
          </div>
        </div>
      }
      )
    }
  </div>;
};

export default Note;
