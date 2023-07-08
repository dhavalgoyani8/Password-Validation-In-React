import React, { useState } from "react";
import "./CompareString.css";

function CompareString() {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [massage, setMassage] = useState("");

  const Compare = () => {
    let str1Sort = str1.split("").sort().join("");
    let str2Sort = str2.split("").sort().join("");
    if (str1Sort === str2Sort) {
      // window.alert("your Strings Are matched");
      setMassage("your Strings Are matched");
    } else {
      // window.alert("your Strings Are not matched");
      setMassage("your Strings Are Not matched");
    }
  };

  return (
    <div className="app">
      <input
        className="input"
        type="text"
        value={str1}
        placeholder="Enter your String 1"
        onChange={(e) => setStr1(e.target.value)}
      />
      <br />
      <input
        className="input"
        type="text"
        value={str2}
        placeholder="Enter your String 2"
        onChange={(e) => setStr2(e.target.value)}
      />
      <br />
      <button className="compareBtn" onClick={Compare}>
        Compare
      </button>
      <h1 className="massage">{massage}</h1>
    </div>
  );
}

export default CompareString;
