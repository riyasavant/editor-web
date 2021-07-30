import React, { useState } from 'react';
import Header from "./Components/Header/index";
import Editor from "./Components/Editor/index";
import Input from "./Components/Input/index";
import Output from "./Components/Output/index";
import axios from 'axios';
import './App.css';

function App() {

  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState({});
  const [lightTheme, setTheme] = useState(true);

  const handleCode = data => {
    setCode(data);
  }

  const handleLanguage = data => {
    setLanguage(data);
  }

  const handleInput = data => {
    setInput(data);
  }

  const changeTheme = () => {
    setTheme(!lightTheme);
  }

  async function handleSubmit() {
    const response = await axios.post('http://localhost:5000/run', {language: language, code: code, input: input});
    const data = response.json();
  }

  return (
    <div className={`content ${lightTheme ? 'light' : 'dark'}`}>  
        <Header lightTheme={lightTheme} changeTheme={changeTheme}/>
        <div className="editor">
          <div className="code-section">
            <Editor code={code} handleCode={handleCode} language="js" lightTheme={lightTheme}/>
          </div>
          <div className="output-section">
            <Input input={input} handleInput={handleInput} lightTheme={lightTheme}/>
            <Output lightTheme={lightTheme}/>
          </div>
        </div>
    </div>
  );
}

export default App;