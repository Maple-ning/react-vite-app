import React from "react";
import "./index.scss";

const Note: React.FC = () => {
  const list: Array<string> = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ]
  return <div className="note-view root">
    {
      list.map((item, index) => {
        return <div key={index} className="note-item">
          {item}
        </div>
      }
      )
    }
  </div>;
};

export default Note;
