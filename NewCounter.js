import React,{useState} from "react";
const NewCounter=()=>{
    const[count,setCount]=useState(0);
    return(
      <div>
        <button onClick={()=>setCount(count+1)}>inc</button>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count-1)}>dec</button>
      </div>
    );
}
export default NewCounter;