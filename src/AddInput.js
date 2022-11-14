import React from "react";

function AddInput(){

    const[val,setVal]=React.useState(' ')

    const[city,setcity]=React.useState(' ')

    const setValue=(event)=>{
        setVal(event.target.value);
    }

    const displayValue=()=>{
        setcity(val)

    }

    return(
        <div>
            
            <label>:city</label>
            <input type="name" onChange={setValue}></input>

            <button type="button" onClick={displayValue}>Add</button>

            <p>city : {city}</p>

        </div>
    )
}

export default AddInput
