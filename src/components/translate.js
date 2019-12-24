import React, { useState } from "react";
import Convert from "./convert";
import Dropdown from "./dropdown";
const options=[
    {
        label:'french',
        value:'fr'
    },
    {
        label:'latin',
        value:'la'
    },
    {
        label:'italian',
        value:'it'
    }
]
const Translate=()=>{
 var [language,setLanguage]=useState(options[0])
 var [text,setText]=useState('')
 return(
    <div>
        <div className="ui form">
            <div className="field">
                <label>Enter the Input</label>
                <input type='text' value={text} onChange={(e)=>{setText(e.target.value)}} />
            </div>
        </div>
        <Dropdown options={options} selected={language} onSelectedChange={setLanguage} name='langauage'/>
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language}/>
    </div>
 )
}

export default Translate