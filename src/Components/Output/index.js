import React from 'react';
import "./index.css";

export default function Output({lightTheme}) {
    return(
        <div className={`output-styles ${lightTheme ? 'light-op' : 'dark-op'}`}>
            <h2>Output</h2>
        </div>
    )
}