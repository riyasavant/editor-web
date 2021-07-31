import React from 'react';
import dark from "../../assets/moon.png";
import light from "../../assets/sun.png";
import "./index.css";

export default function Header({lightTheme, changeTheme, handleLanguage, changeBackground}) {
    return(
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="flex">
                <div style={{fontSize: '30px', marginRight: '20px'}}>Code Editor</div>
                <div onClick={changeTheme} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}><img src={lightTheme ? dark : light} alt="Theme Icon" height="18px" width="18px"/></div>

                <div>
                    <select 
                        onChange={handleLanguage} 
                        style={{cursor: 'pointer', padding: '5px', border: 'none', background: 'palegreen', marginLeft: '20px'}}
                    >
                        <option value="JS">JS</option>
                        <option value="CPP">CPP</option>
                        <option value="JAVA">JAVA</option>
                        <option value="C">C</option>
                    </select>
                </div>    


                <div>
                    <select 
                        onChange={changeBackground} 
                        style={{cursor: 'pointer', padding: '5px', border: 'none', background: 'rgb(300, 200, 100)', marginLeft: '20px'}}
                    >
                        <option value="bg1">BG1</option>
                        <option value="bg">BG</option>
                        <option value="bg">BG</option>
                        
                    </select>
                </div>    

            </div> 
            <div className="flex">
                <button style={{padding: '10px', border: 'none', background: '#D14D5D', marginRight: '10px', color: 'white'}}>Reset</button>
                <button style={{padding: '10px', border: 'none', background: '#2CCACA'}}>Run</button>
            </div> 
        </div>
    )
}