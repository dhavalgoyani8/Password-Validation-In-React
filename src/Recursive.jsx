import React, { useState } from "react";
import "./Recursive.css";
import { Button, Menu } from "antd";
import { ArrowRightOutlined,ArrowLeftOutlined,SmileOutlined  } from '@ant-design/icons'

function Recursive({ familyTree }) {
  const [family, setFamily] = useState([]);
  const [name, setName] = useState(["My Family"]);

  const show = family.length === 0 ? familyTree : family[family.length - 1];

  const HandleFamily = (e) => {
    setFamily([...family, e.children]);
    setName([...name, e.title]);
  };

  const goBack = () => {
    const newFamily = [...family];
    newFamily.pop();
    setFamily(newFamily);

    const preName = [...name];
    preName.pop();
    setName(preName);
  };

  return (
    <div className="main">
    <div className="header">
      {family.length !== 0 && <Button className="backButton" onClick={goBack}><ArrowLeftOutlined /> Back</Button>}
      <h1 className="parentName"> {name[name.length - 1]} </h1>
    </div>
    <div className="children">
      {show.map((e) => {
        return (
          <div
            className="child"
            key={e.title}
            onClick={() => e.children.length !== 0 && HandleFamily(e)}>
            {e.title}
            {e.children.length !== 0 && <ArrowRightOutlined />}
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Recursive;
