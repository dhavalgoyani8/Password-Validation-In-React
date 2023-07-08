import { useState } from "react";
import "./App.css";
import CompareString from "./CompareString";
import Pass4 from "./Pass4";
import Recursive from "./Recursive";
import familyTree from './RecursiveData'

function App() {

  return (
    <>
      {/* <Pass4 /> */}
      {/* <CompareString /> */}
      <Recursive familyTree={familyTree} />
    </>
  );
}

export default App;
