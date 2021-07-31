import React, { useState } from 'react';
import Header from "./Components/Header/index";
import Editor from "./Components/Editor/index";
import Input from "./Components/Input/index";
import Output from "./Components/Output/index";
import axios from 'axios';
import './App.css';

function App() {

  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('js');
  const [input, setInput] = useState('');
  // const [output, setOutput] = useState({});
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

  const handleReset = () => {
    setCode('');
  }

  async function handleSubmit() {
    try {
      const response = await axios.post('http://localhost:5000/run', {language: language, code: code, input: input});
      const data = response.json();
      console.log(data);
    } catch(e) {console.log(e);}
  }

  return (
    <div className={`content ${lightTheme ? 'light' : 'dark'}`}>  
        <Header lightTheme={lightTheme} changeTheme={changeTheme} language={language} changeLanguage={handleLanguage} handleSubmit={handleSubmit} handleReset={handleReset}/>
        <div className="editor">
          <div className="code-section">
            <Editor code={code} handleCode={handleCode} language={language} lightTheme={lightTheme}/>
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