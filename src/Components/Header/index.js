import React, { useState } from "react";
import dark from "../../assets/moon.png";
import light from "../../assets/sun.png";
import "./index.css";



export default function Header({lightTheme, changeTheme}) {


    return(
        <header className="header">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="flex">
                    <div style={{fontSize: '30px', marginRight: '20px'}}>Code Editor</div>
                    <div onClick={changeTheme} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}><img src={lightTheme ? dark : light} alt="Theme Icon" height="18px" width="18px"/></div>
                </div> 

                <div className="flex">
                    <button style={{padding: '7px', boxShadow: '1px 1px 4px 1px #D14D5D', border: 'none', background: '#D14D5D', marginRight: '10px', color: 'white'}}>Reset</button>
               
                    <select style={{padding : '7px', boxShadow: '1px 1px 4px 1px #C4C4C4' ,marginRight: '10px', minWidth: '25vh' , background: '#C4C4C4'}} name="language" className=""> 
                       
                        <option value="javascript">Javascript</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                    </select>     
                    
                    <button className='run' style={{padding: '7px', border: 'none', background: '#2CCACA', color: 'white'}}>Run</button>
                </div> 

            </div>
        </header>
    );
}