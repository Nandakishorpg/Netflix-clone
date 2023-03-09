import { React, useState, useEffect, useContext } from "react";
import Test2 from "./Test2";

export default function Test() {
  const [name, setname] = useState("nandhu");
  return (
    <div className="TEST">
      
      <Test2 myname={name} />
    </div>
  );
}
