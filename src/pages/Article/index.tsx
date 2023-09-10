import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import { getHomeList } from "@/api/home";
import { loadImage } from "@/utils/image";
import { Tabs, Tag } from "antd";
import type { TabsProps } from "antd";
import categoryIcon from "@/assets/icon/category.svg";
import "./index.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { Divider, Skeleton } from "antd";

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "关注",
  },
  {
    key: "2",
    label: "推荐",
  },
  {
    key: "3",
    label: "最新",
  },
];

const category = [
  {
    key: "1",
    label: "ES5",
  },
  {
    key: "2",
    label: "ES6",
  },
  {
    key: "3",
    label: "CSS3",
  },
  {
    key: "4",
    label: "HTML5",
  },
  {
    key: "5",
    label: "Vue2",
  },
  {
    key: "6",
    label: "Vu3",
  },
  {
    key: "7",
    label: "Webpack",
  },
];

const tags = [
  {
    key: 1,
    name: "前端",
  },
  {
    key: 2,
    name: "后端",
  },
  {
    key: 3,
    name: "浏览器",
  },
  {
    key: 4,
    name: "小程序",
  },
  {
    key: 5,
    name: "算法",
  },
];

const Article: React.FC = () => {
  const navigate = useNavigate();
  const toDetail = () => navigate("/article/123");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const onChange = (key: string) => {
    setData([]);
    setLoading(false);
    loadMoreData();
  };

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    getHomeList()
      .then((res) => {
        if (res.code === 200) {
          setData([...data, ...res.data]);
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div className="article-view root">
      <div className="article-left card-shadow">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <div
          className="article-list"
          id="scrollableDiv"
          style={{
            overflow: "auto",
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            {data.map((item, index) => {
              return (
                <div key={index} className="article-item" onClick={toDetail}>
                  <div className="image-wrapper">
                    <Image
                      style={{ width: "100%" }}
                      preview={false}
                      src={loadImage(item.url)}
                    />
                  </div>
                  <div className="article-wrapper">
                    <div className="article-title">{item.name}</div>
                    <div className="article-publish-time">
                      <Tag>{item.type}</Tag>
                    </div>
                    <div className="article-intro">{item.introduce}</div>
                  </div>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
      <div className="article-right">
        <div className="article-classify-box card-shadow">
          <div className="article-classify-title">分类</div>
          <ul>
            {category.map((item) => {
              return (
                <li key={item.key} className="classify-li">
                  <img src={categoryIcon} style={{ marginRight: 10 }} />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="article-tag-box card-shadow">
          <div className="article-tag-title">标签</div>
          <ul className="article-ul">
            {tags.map((item) => {
              return <li key={item.key}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Article;
