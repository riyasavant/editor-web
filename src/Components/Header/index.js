import React, { useState } from "react";
import dark from "../../assets/moon.png";
import light from "../../assets/sun.png";
import "./index.css";

export default function Header({
  lightTheme,
  changeTheme,
  language,
  changeLanguage,
  themeColor,
  changeColor,
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="flex">
        <div style={{ fontSize: "30px", marginRight: "20px" }}>Code Editor</div>
        <div
          onClick={changeTheme}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <img
            src={lightTheme ? dark : light}
            alt="Theme Icon"
            height="18px"
            width="18px"
          />
        </div>
      </div>
      <div className="flex">
        <div>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "none",
              background: themeColor === "purple" ? "#5A2ABF" : "#36A3A3",
              marginRight: "10px",
              color: "white",
              fontSize: "17px",
            }}
            defaultValue={language}
          >
            <option value="js">JavaScript</option>
            <option value="cpp">CPP</option>
            <option value="c">C</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div>
          <select
            onChange={(e) => changeColor(e.target.value)}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "none",
              background: themeColor === "purple" ? "#5A2ABF" : "#36A3A3",
              marginRight: "10px",
              color: "white",
              fontSize: "17px",
            }}
            defaultValue={themeColor}
          >
            <option value="purple">Purple</option>
            <option value="cyan">Cyan</option>
          </select>
        </div>
      </div>
    </div>
  );
}
