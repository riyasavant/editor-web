import React from 'react';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./index.css";

export default function Input({input, handleInput, lightTheme}) {
    return(
        <div className={`input-styles ${lightTheme ? 'light-ip' : 'dark-ip'}`}>
            <Editor
                  value={input}
                  onValueChange={(code) => handleInput(code)}
                  highlight={(code) => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                  }}
                  placeholder="Input"
                  className="container__editor"
            />
        </div>
    )
}