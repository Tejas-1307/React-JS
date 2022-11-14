import axios from "axios"
import React, { useEffect, useState } from "react"

function ApiCall(){

    const[users,setUsers]=useState([])

    useEffect(()=>{
        console.log('hiiii')
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.data)
        .then(res=>{
            setUsers(res)
        })
    },[])

    return(
        <div>
            <h1>User List</h1>
            <ul>
                {
                    users.map((users)=>(
                        <li key={users.id}>{users.name+" | "+users.username+" | "+users.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ApiCall