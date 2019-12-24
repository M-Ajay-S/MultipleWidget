import React ,{useEffect, useState} from "react";
import axios from 'axios'

const Search= ()=>{
    var [term,setTerm]=useState('')
    var [debouncedTerm,setDebouncedTerm]=useState(term)
    var [results,setResults]=useState([])
    

    useEffect(()=>{
        const timeoutId=setInterval(()=>{setDebouncedTerm(term)},1000)
        return ()=>{
            clearInterval(timeoutId)
        }
    })
    useEffect(()=>{
        const search=async ()=>{
            const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
                 params:{
                     action:'query',
                     list:'search',
                     origin:'*',
                     format:'json',
                     srsearch:debouncedTerm
                 }
             })
             setResults(data.query.search)
            }
        if(debouncedTerm){
            search()
        }
},[debouncedTerm])
  /*  useEffect(()=>{
        const search=async ()=>{
           const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:determ
                }
            })
        setResults(data.query.search)
        }
        if(term && !results.length){
            search()
        }
        if(term && results.length){
        const timeoutId= setTimeout (()=>{ 
                   search();
               },500)

           return ()=>{
               clearTimeout(timeoutId)}
        }

    },[term,results.length])
*/
    const renderedList=results.map(({title,snippet,pageid})=>{
       return( <div className="item" key={pageid}>
            <div className="right floated content">
                <a className="ui button" href={`https://en.wikipedia.org?curid=${pageid}`}>Go</a>
            </div>
            <div className="content">
                <div className="header">
                {title}
                </div>
                <span dangerouslySetInnerHTML={{__html:snippet}}></span>
                
            </div>
        </div>)
    })
       
return(<div>
    <div className="ui form">
        <div className="field">
            <label>Enter Search Term</label>
            <input  value={term} onChange={(e)=>setTerm(e.target.value)} className='input'/>
        </div>
    </div>
    <div className="ui cell list">
        {renderedList}
    </div>
</div>)
}

export default Search