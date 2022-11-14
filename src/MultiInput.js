import React from "react";

function MultiInput(){
    const userObj = {
        firstName:' ',
        lastName: ' ',
        city: ' '
    }

    const[user,setUser]= React.useState(userObj)
    const[message,setMessage]= React.useState({})

    const setInput= (event)=>{
        setUser({...user,[event.target.name]:
        event.target.value})
    }

    const displayData= () =>{
        // console.warm(user) 
        setMessage(user)

    }
    return(
        <div>
            <label>firstName</label>
            <input type='text' name='firstName' onChange={setInput}/>

            <label>lastName</label>
            <input type='text' name='lastName' onChange={setInput}/>

            <label>city</label>
            <input type='text' name='city' onChange={setInput}/>

            <button type="button" onClick={displayData}>Submit</button>

            <p>firstName: {user.firstName}</p>
            <p>lastName: {user.lastName}</p>
            <p>city: {user.city}</p>
           
        </div>
    )

    
    
    }

    export default MultiInput
