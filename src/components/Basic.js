import React,{useState} from "react";


let a=0;

const Basics =() =>{

    let [count,setCount]=useState(0);

    function incCount(){
        setCount(count+1);
    }
    
    function inc(){
        a=a+1;
        console.log(a);
    }



    return(
        <div>
            <h1>{a}</h1>
            <button onClick={inc}>Increase A</button>

            <h1>{count}</h1>
            <button onClick={incCount}> Increase C</button>
        </div>
    )
}
export default Basics;