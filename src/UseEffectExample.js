
import React, { useEffect } from "react"

function UseEffectExample(){

//     const UserList=[
//         {
//         id:1,
//         name:"A",
//         city:"pune"
//     },
//     {
//         id:2,
//         name:"B",
//         city:"mumbai"
//     }
// ]

    const[UserList,setUserList]=React.useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(res=>{
            setUserList(res)
        })
        console.log('hiii!!!')
    },[])

    return(
        <div>
            <h1>Use Effect Example</h1>
            <ul>
                {
                    UserList.map((user)=>
                    <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    )
}
export default UseEffectExample