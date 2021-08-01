import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./index.css";

export default function Input({ input, handleInput, lightTheme }) {
  return (
    <div className={`input-styles ${lightTheme ? "light-ip" : "dark-ip"}`}>
      <div
        style={{
          color: lightTheme ? "black" : "white",
          fontSize: "30px",
        }}
      >
        <p style={{ margin: "0", padding: "20px", paddingBottom: "0" }}>
          Input
        </p>
      </div>
      <Editor
        value={input}
        onValueChange={(code) => handleInput(code)}
        highlight={(code) => highlight(code, languages.js)}
        padding={20}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: "18px",
        }}
        placeholder="10 20 30"
        className="container__editor"
      />
    </div>
  );
}
