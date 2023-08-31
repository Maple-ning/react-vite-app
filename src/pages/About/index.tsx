import React from "react";
import "./index.scss";
import { loadImage } from "@/utils/image";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '动态',
  },
  {
    key: '2',
    label: '文章',
  },
  {
    key: '3',
    label: '收藏',
  },
  {
    key: '4',
    label: '最近点赞',
  },
];

const About: React.FC = () => {
  return <div className="about-view root">
    <div className="about-card">
      <div className="major-card">
        <div className="profile-wrapper card-shadow">
          <div className="profile-box">
            <img src={loadImage("avatar.png")} alt="" />
          </div>
          <div className="info-box">
            <div className="info-username">Maple-Ning</div>
            <div className="info-hobby">游戏、前端</div>
            <div className="info-intro">想努力学习的人</div>
          </div>
        </div>
        <div className="detail-wrapper card-shadow">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
      <div className="minor-card card-shadow">
        
      </div>
    </div>
  </div>;
};

export default About;
