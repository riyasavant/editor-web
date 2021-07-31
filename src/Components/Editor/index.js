import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import cross from "../../assets/cross.svg";
import run from "../../assets/run.svg";
import "./index.css";

export default function CodeEditor({
  code,
  handleCode,
  lightTheme,
  handleReset,
  handleSubmit,
}) {
  return (
    <div className={`editor-styles ${lightTheme ? "light-bg" : "dark-bg"}`}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          alt="clear"
          src={cross}
          style={{ marginRight: "15px", marginTop: "15px", cursor: "pointer" }}
          onClick={handleReset}
        />
        <img
          alt="run"
          src={run}
          style={{ marginRight: "15px", marginTop: "15px", cursor: "pointer" }}
          onClick={handleSubmit}
        />
      </div>
      <Editor
        value={code}
        onValueChange={(code) => handleCode(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={20}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: "18px",
        }}
        placeholder="Write some code..."
        className="container__editor"
      />
    </div>
  );
}
