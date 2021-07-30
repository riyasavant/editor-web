import React from 'react';
import Header from "./Components/Header/index";
import Editor from "./Components/Editor/index";
import Input from "./Components/Input/index";
import Output from "./Components/Output/index";
import './App.css';

function App() {
  return (
    <>  
        <Header />
        <Editor />
        <Input />
        <Output />
    </>
  );
}

export default App;