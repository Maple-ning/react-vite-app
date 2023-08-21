import React from 'react';
import "../style/topMenu.scss";

const itemLogo: React.FC = () => {
  return (
    <div className="item-logo">
      <img src="/vite.svg" style={{ marginRight: "0.5rem" }} />
      Learning Blogs
    </div>
  )
}

export default itemLogo;