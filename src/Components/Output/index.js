import React from "react";
import "./index.css";

export default function Output({ lightTheme, outputData, themeColor }) {
  return (
    <div className={`output-styles ${lightTheme ? "light-op" : "dark-op"}`}>
      <div
        style={{
          color: lightTheme ? "black" : "white",
          fontSize: "30px",
        }}
      >
        <p style={{ margin: "0", padding: "20px" }}>Output</p>
      </div>
      <div
        style={{
          color:
            (outputData && outputData.error && "red") ||
            (themeColor === "purple" ? "#5A2ABF" : "#36A3A3"),
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span style={{ marginLeft: "20px" }}>{"> "} </span>
        {(outputData && outputData.error && (
          <span>{outputData.errorMessage}</span>
        )) || <span>{outputData && outputData.result}</span>}
      </div>
    </div>
  );
}
