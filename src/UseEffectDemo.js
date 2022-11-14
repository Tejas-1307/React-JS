import React ,{ useEffect } from "react"

function UseEffectDemo(){

    // useEffect(()=>{
    //     console.log("hello!!");
    // }
    // )

    //it is equivalent to componentDidmount
    // useEffect(()=>{
    //     console.log("hello!!");
    // },[])

    const [value,setValue]=React.useState(0)  //it is equivalent to componentDidmount as well as componentDidUpdate

    useEffect(()=>{
            console.log("hello!!");
        },[value])
    
    const handleChange=()=>{
        setValue(value+10);
    }
    

    return(
        <center>
        <div>
            <h1 style={{color:"red"}}>Use Effect Demo !!!</h1>
            <p>Value is: {value}</p>
            <button onClick={handleChange}>Check</button>
        </div>
        </center>
    )
}

export default UseEffectDemo