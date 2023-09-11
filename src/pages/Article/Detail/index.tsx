import React, { useState,useEffect } from "react";
import "./index.scss";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from "remark-gfm";
import { vscDarkPlus, coyWithoutShadows, darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import { getArticleDetail } from "@/api/article";
import "@/assets/styles/markdown.scss";

const test = "## 一、margin\n## 二、绝对定位\n## 三、子元素绝对定位父元素相对定位\n## 四、flex布局\n"


const ArticleDetail: React.FC = () => {
  const [title,setTitle] = useState("");
  const [time,setTime] = useState("");
  const [type,setType] = useState("");
  const [content,setContent] = useState("");
  
  useEffect(()=>{
    getArticleDetail().then((res)=>{
      if(res.code===200){
        setTitle(res.data.title);
        setTime(res.data.time);
        setType(res.data.type);
        setContent(res.data.content);
      }
    })
  },[])

  return (
    <div className="root">
      <div className="article-detail-view">
        <div className="article-content card-shadow">
          <h1 className="article-title">{title}</h1>
          <div className="auth-info">
            <span style={{marginRight:"20px"}}>发布时间：{time}</span>
            <span>文章类型：{type}</span>
          </div>
          <div className="article-markdown">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              children={content.replace(/\\n/g, "\n")}
            />
          </div>
        </div>
        <div className="article-catalogue card-shadow">
          <div className="catalog-title">目录</div>
          <div className="catelog-body">
            <MarkNav
              className="article-menu"
              source={test}
              ordered={false}
              headingTopOffset={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
