import React,{useState,useEffect} from "react";
import axios from 'axios'
//https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it
const Convert=({text,language})=>{
    var [translatedText,setTranslatedText]=useState('')
    var [debouncedText,setDebouncedText]=useState(text)

useEffect(()=>{
    const timeoutID=setTimeout(()=>{
        setDebouncedText(text)
    },1000)

    return ()=>{
        clearTimeout(timeoutID)
    }
},[text])

useEffect(()=>{
    const convert=async()=>{
        const response=await axios.get("https://api.mymemory.translated.net/get",{
        params:{
            q:debouncedText,
            langpair:`en|${language.value}`
        }
        })
        setTranslatedText(response.data.responseData.translatedText)
        
    }
    if(debouncedText){
        convert()
    }
},[language,debouncedText])

return <div>
    <h1 className="ui header">{translatedText}</h1>
</div>
}

export default Convert