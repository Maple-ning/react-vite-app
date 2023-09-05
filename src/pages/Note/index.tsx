import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import { getHomeList } from "@/api/home";
import { loadImage } from "@/utils/image";
import { Tabs, Tag } from "antd";
import type { TabsProps } from "antd";
import "./index.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import { Avatar, Divider, List, Skeleton } from "antd";

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

const Note: React.FC = () => {
  const navigate = useNavigate();
  const toDetail = () => navigate("/note/123");

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
    <div className="note-view root">
      <div className="note-left card-shadow">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <div
          className="note-list"
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
                <div key={index} className="note-item" onClick={toDetail}>
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
      <div className="note-right">
        <div className="articel-reading-top card-shadow"></div>
        <div className="articel-collect-top card-shadow"></div>
      </div>
    </div>
  );
};

export default Note;
