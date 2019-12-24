import React, { useEffect, useRef, useState } from "react";

const Dropdown=({options,selected,onSelectedChange,name})=>{
    var [open,setOpen]=useState(false)
    var ref=useRef()
    useEffect(()=>{
        const onBodyClick= (event)=>{
            // console.log('body click')
             //console.log(event.target)
        if(ref.current.contains(event.target))
             {
                 return;
             }
             setOpen(false)
         }
        document.body.addEventListener('click',onBodyClick)

        return ()=>{
            document.body.removeEventListener('click',onBodyClick)
        }
    },[])

    const renderedList=options.map(({value,label})=>{
        if(value===selected.value){
            return null
        }
        else{
            return(
                <div key={value} onClick={()=>{onSelectedChange({value,label})}} className='item'>
                    {label}
                </div>
            )
        }
    })
    //console.log(ref.current)
    return(<div>
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a {name}</label>
                <div onClick={()=>{
                    //console.log('dropdown click')
                    setOpen(!open)}} className={`ui selection dropdown ${open?'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div onClick={()=>{
                        //console.log('item click')
                    }} className={`menu ${open?'visible transition':''}`}>
                        {renderedList}
                    </div>
                </div>
            </div>
        </div><br/>
        <div className="ui" style={{color:selected.value}}>
            <p>{`this text is ${selected.value}!`}</p>
        </div>
    </div>)
}

export default Dropdown