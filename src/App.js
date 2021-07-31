import React, { useState } from "react";
import Header from "./Components/Header/index";
import Editor from "./Components/Editor/index";
import Input from "./Components/Input/index";
import Output from "./Components/Output/index";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("js");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [lightTheme, setTheme] = useState(false);
  const [color, setColor] = useState("purple");

  const handleCode = (data) => {
    setCode(data);
  };

  const handleLanguage = (data) => {
    setLanguage(data);
  };

  const handleInput = (data) => {
    setInput(data);
  };

  const changeTheme = () => {
    setTheme(!lightTheme);
  };

  const handleReset = () => {
    setCode("");
    setOutput(null);
  };

  const changeColor = (data) => {
    setColor(data);
  };

  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:5000/run", {
        language: language,
        code: code,
        input: input,
      });
      setOutput(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className={`content ${lightTheme ? "light" : "dark"}`}>
      <div className="content-inner">
        <Header
          lightTheme={lightTheme}
          changeTheme={changeTheme}
          changeColor={changeColor}
          language={language}
          changeLanguage={handleLanguage}
          themeColor={color}
        />
        <div className="editor">
          <div className="code-section">
            <Editor
              code={code}
              handleCode={handleCode}
              language={language}
              lightTheme={lightTheme}
              handleSubmit={handleSubmit}
              handleReset={handleReset}
            />
          </div>
          <div className="output-section">
            <Input
              input={input}
              handleInput={handleInput}
              lightTheme={lightTheme}
            />
            <Output
              lightTheme={lightTheme}
              outputData={output}
              themeColor={color}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
