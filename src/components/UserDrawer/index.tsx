import React, { useState } from 'react';
import { Drawer } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import style from "./index.module.scss";

const UserDrawr: React.FC = (props) => {

  const onClose = () => {
    props.setOpen(false);
  };

  return (
    <>
      <Drawer placement="right" closable={false} onClose={onClose} open={props.open}>
        <div className={style["user-title"]}>
          <span>Maple-Ning</span>
          <CloseOutlined onClick={onClose} />
        </div>
      </Drawer>
    </>
  );
};

export default UserDrawr;