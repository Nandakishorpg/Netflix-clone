import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { React, useState } from "react";
import { useRef } from "react";
import ListItem from "../listItem/ListItem";
import "./list.css";

export default function List() {
  const [slideNumber, setslideNumber] = useState(0);

  const listRef = useRef();
  const handleClick = (direction) => {
 
    let distance = listRef.current.getBoundingClientRect().x - 30;
    console.log(distance);
    console.log(direction);
    if (direction === "left" && slideNumber > 0) {
      setslideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${240 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      setslideNumber(slideNumber +1);
      console.log(slideNumber)
      listRef.current.style.transform = `translateX(${-240 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined  
          onClick={() => handleClick("left")}
          className="sliderArrow left"
        />
        <div className="container" ref={listRef}>
          <ListItem />

          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
