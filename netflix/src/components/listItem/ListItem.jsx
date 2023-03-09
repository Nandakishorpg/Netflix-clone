import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React from "react";
import "./listitem.css";

export default function ListItem() {
  return (
    <div className="listItem">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh13DSHCL25gx4MW9SAqHM_6aNoFNX_dgTQ&usqp=CAU"
        alt=""
      />

<div className="itemInfo">
    <div className="icons">
      <PlayArrow />
      <Add />
      <ThumbUpAltOutlined />
      <ThumbDownAltOutlined></ThumbDownAltOutlined>
    </div>
  </div>;
    </div>
  );
  
}
