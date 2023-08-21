import React, { useState } from 'react';
import { Avatar, Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { removeLocalStorage } from "@/utils/publicFn";
import style from "./index.module.scss";

const UserDrawer: React.FC = (props) => {
  const navigate = useNavigate();
  const [user] = useState("Maple-Ning");
  const onClose = () => {
    props.setOpen(false);
  };
  const signOut = () => {
    removeLocalStorage("learn-token");
    removeLocalStorage("selectKey");
    navigate("/login");
  };

  return (
    <>
      <Drawer bodyStyle={{ padding: 0 }} placement="right" closable={false} onClose={onClose} open={props.open}>
        <div className={style["user-container"]}>
          <div className={style["user-title"]}>
            <span>
              <Avatar style={{ backgroundColor: "#7265e6", marginRight: "8px", verticalAlign: 'middle' }} size="middle">
                {user}
              </Avatar>
              Maple-Ning
            </span>
            <CloseOutlined onClick={onClose} />
          </div>
          <ul className={style["user-body"]}>
            <li className={style["user-li"]}>Setting</li>
            <li className={style["user-li"]} onClick={signOut}>Sign out</li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default UserDrawer;