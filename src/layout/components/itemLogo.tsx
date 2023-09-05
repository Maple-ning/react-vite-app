import React from 'react';
import "../style/topMenu.scss";

const itemLogo: React.FC = () => {
  return (
    <div className="item-logo">
      <img src="/maple.svg" style={{ width:"50px",marginRight: "0.5rem" }} />
      枫叶之家
    </div>
  )
}

export default itemLogo;