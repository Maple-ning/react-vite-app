import React from "react";
import "./index.scss";

const ArticleDetail: React.FC = () => {
  return (
    <div className="root">
      <div className="article-detail-view">
        <div className="article-content card-shadow">
          <h1 className="article-title">标题</h1>
          <div className="auth-info">
            <span>作者：</span>
            <span>发布时间：</span>
            <span>类型：</span>
          </div>
          <div className="article-markdown"></div>
        </div>
        <div className="article-catalogue card-shadow">
          <div className="catalog-title">目录</div>
          <div className="catelog-body"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
