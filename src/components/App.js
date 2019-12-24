import React,{useState} from "react";
import Translate from "./translate";
import Dropdown from "./dropdown";
import Accordion from "./Accordion";
import Search from "./Search";
import Route from "./Route";
import Header from "./Header";

const items=[
    {title:'What is react?',content:'it is a front-end library'},{
        title:'Why use react?',content:'it is most popular amoung developers'
    },
    {
        title:'How do you use react?',
        content:'we use react by using components'
    }]

const options=
       [ {
            label:'Red',
            value:'red'
        },
        {
            label:'Blue',
            value:'blue'
        },
        {
            label:'Green',
            value:'green'
        }]



const App=()=>{
    var [selected,setSelected]=useState(options[0])
    var [toggleDropdown,setToggleDropdown]=useState(true)
        return(<div>
            <Header/>
           <Route path='/'><Accordion items={items}/></Route>
           <Route path='/search'><Search/></Route>
           <Route path='/dropdown'><Dropdown selected={selected} onSelectedChange={setSelected} options={options} name='colour'/></Route>
           <Route path='/translate'><Translate/></Route>

        </div>)
}

export default App