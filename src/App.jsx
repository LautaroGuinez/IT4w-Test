import React, { useState } from "react";
import * as functions from "./utils/funtions";
function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [resultAnagram, setResultAnagram] = useState(null);

  const [resultTes2, setResultTes2] = useState(null);

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setInput3(event.target.value);
  };

  const handleAnagramButton = () => {
    if (!input1 || !input2)
      return alert("Ambos campos deben estar completados");
    let newInput1 = functions.cleanString(input1);
    let newInput2 = functions.cleanString(input2);
    const isAnAnagram = functions.isAnAnagram(newInput1, newInput2);
    if (isAnAnagram) {
      return setResultAnagram(<h1 style={{ color: "green" }}>True</h1>);
    } else {
      return setResultAnagram(<h1 style={{ color: "red" }}>False</h1>);
    }
  };
  const handleTest2 = () => {
    if (!input3) return alert("Complete campo");
    const result = functions.convertString(input3);
    return setResultTes2(result);
  };
  return (
    <div>
      <h1
        className="Title"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Challenge Tecnico
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Test 1</h2>
        <input
          style={{ paddingTop: "10px" }}
          onChange={handleInputChange1}
        ></input>
        <input
          style={{ paddingTop: "10px", marginTop: "25px" }}
          onChange={handleInputChange2}
        ></input>
        {resultAnagram && <p>{resultAnagram}</p>}
        <button style={{ marginTop: "15px" }} onClick={handleAnagramButton}>
          Test
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Test 2</h2>
        <input onChange={handleInputChange3}></input>
        {resultTes2 && <p>{resultTes2}</p>}
        <button style={{ marginTop: "15px" }} onClick={handleTest2}>
          Test
        </button>
      </div>
    </div>
  );
}

export default App;
