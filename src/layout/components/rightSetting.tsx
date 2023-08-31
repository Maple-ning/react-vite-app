import React, { useState } from 'react';
import { Avatar, Dropdown, message, Space, Input } from 'antd';
import { BellFilled } from '@ant-design/icons';
import { loadImage } from "@/utils/image";
import UserDrawer from "@/components/UserDrawer";
import "../style/topMenu.scss";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const rightSetting: React.FC = () => {
  const [user] = useState("Maple-Ning");
  const [open, setOpen] = useState(false);
  const clickUser = () => setOpen(true);
  return (
    <ul className="right-setting">
      <li className="search-item">
        <Search placeholder="Search what you want" onSearch={onSearch} size="middle" style={{ width: 200 }} />
      </li>
      <li className="nav-item">
        <BellFilled style={{ fontSize: "26px", color: "#8a919f" }} />
      </li>
      <li className="nav-item" onClick={clickUser}>
        <Avatar style={{ backgroundColor: "#7265e6", verticalAlign: 'middle' }} size="large" src={loadImage("avatar.png")}>
          {user}
        </Avatar>
      </li>
      <UserDrawer open={open} setOpen={setOpen} />
    </ul>
  )
}


export default rightSetting;