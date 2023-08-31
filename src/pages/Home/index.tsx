import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadImage } from "@/utils/image";
import { getHomeList } from "@/api/home";
import "./index.scss";
import { Image, Tag, Carousel } from 'antd';

const Home: React.FC = () => {
  const [articles,setArticles] = useState([]);
  const [pictures,setPictures] = useState([]);
  useEffect(()=>{
    getHomeList().then((res)=>{
      if(res.code === 200){
        setArticles(res.data);
      }
    })
  },[])
  useEffect(()=>{
    setPictures(articles.slice(0,4));
  },[articles])

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '300px',
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const navigate = useNavigate();

  const toDetail = (name: string) => {
    navigate(`/note/${name}`);
  };


  return (
    <div className="home-view root">
      <div className="home-view-left">
        <div className="home-header card-shadow">
          <Carousel autoplay>
            {
              pictures.map((item, index) => {
                return <div key={index} style={contentStyle} onClick={() => toDetail(item.name)}>
                  <Image
                    style={{ width: "100%" }}
                    preview={false}
                    src={loadImage(item.url)}
                  />
                </div>
              })
            }
          </Carousel>
        </div>
        <div className="home-article-list">
          {
            articles.map((item, index) => {
              return <div key={index} className="article-item card-shadow" onClick={() => toDetail(item)}>
                <div className="article-info">
                  <div className="article-type"><Tag color="#0000004d">{item.type}</Tag></div>
                  <div className="article-introduction">{item.name}</div>
                </div>
                <Image
                  style={{ width: "100%" }}
                  preview={false}
                  className="article-image"
                  src={loadImage(item.url)}/>
              </div>
            })
          }
        </div>
        <div style={{ height: 50 }}></div>
      </div>
      <div className="home-view-right">
        <div className="home-person-side card-shadow">
          <div className="my-avatar">
            <img src={loadImage("avatar.png")} alt="" />
          </div>
          <div className="my-name">Maple-Ning</div>
          <div className="my-job">Web Developer</div>
          <div className="my-info">I am a hard worker</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
