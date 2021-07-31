import React from 'react';
import dark from "../../assets/moon.png";
import light from "../../assets/sun.png";
import "./index.css";

export default function Header({lightTheme, changeTheme, language, changeLanguage, handleReset, handleSubmit}) {

    function handleChange(e) {
        changeLanguage(e.target.value);
    }

    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="flex">
                <div style={{fontSize: '30px', marginRight: '20px'}}>Code Editor</div>
                <div onClick={changeTheme} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}><img src={lightTheme ? dark : light} alt="Theme Icon" height="18px" width="18px"/></div>
            </div> 
            <div className="flex">
                <div>
                    <select 
                        onChange={handleChange} 
                        style={{cursor: 'pointer', padding: '10px', border: 'none', background: 'palegreen', marginRight: '10px'}}
                        defaultValue={language}
                    >
                        <option value="js">JavaScript</option>
                        <option value="cpp">CPP</option>
                        <option value="c">C</option>
                        <option value="java">Java</option>  
                    </select>
                </div> 
                <div onClick={handleReset} style={{padding: '10px', border: 'none', background: '#D14D5D', marginRight: '10px', color: 'white', cursor: 'pointer'}}>Reset</div>
                <div onClick={handleSubmit} style={{cursor: 'pointer', padding: '10px', border: 'none', background: '#2CCACA'}}>Run</div>
            </div> 
        </div>
    )
}