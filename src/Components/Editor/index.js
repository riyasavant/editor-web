import React from 'react';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "./index.css";

export default function CodeEditor({code, handleCode, lightTheme}) {
    return(
        <div className={`editor-styles ${lightTheme ? 'light-bg' : 'dark-bg'}`}>
            <Editor
                  value={code}
                  onValueChange={(code) => handleCode(code)}
                  highlight={(code) => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                  }}
                  placeholder="Write some code..."
                  className="container__editor"
            />
        </div>
    )
}