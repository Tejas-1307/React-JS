import React from "react";
import { useNavigate } from "react-router-dom";

function HomeTwo(){

    const userObj={
        firstName:'',
        lastName:''
    }

    const[user,setUser]=React.useState(userObj)

    const navigate=useNavigate()

    const handleInput=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const sendData=()=>{
        if(user.firstName!=='' && user.lastName!==''){
            navigate(`/services`,{
                state:user
            })
        }
    }

    return(
        <div>
            <form id="myform">
                <label>FirstName: </label>
                <input type='text' name='firstName' onChange={handleInput}></input>

                <label>LastName: </label>
                <input type='text' name='lastName' onChange={handleInput}></input>

                <button type='button' onClick={sendData}>submit</button>
            </form>
        </div>
    )
}

export default HomeTwo