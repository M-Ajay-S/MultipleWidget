import React,{useState} from "react";


const Accordion=({items})=>
{       
    var [activeIndex,setActiveIndex]=useState(null)
    
    const onTitleClick=(title,index)=>{
        console.log(`title=${title} \n index=${index}`)
        setActiveIndex(index)
    }
    const renderedItem=items.map(({title,content},index)=>{
        const active=index===activeIndex?'active':''
        return(<React.Fragment key={title}>
            <div className={`title ${active}`}
            onClick={()=>onTitleClick(title,index)}
            >
                <i className="dropdown icon"></i>
            {title} 
            </div>
            <div className={`content ${active}`}>
        {content}
        </div>
            </React.Fragment>)
    })
        return(<div className="ui styled accordion">
            {renderedItem}
            <h1>{activeIndex}</h1>
        </div>)
    }

export default Accordion