import React, { useMemo } from "react";

function UseMemoDemo(){
    
    const users = [

        {
            id:1,
            name:'John'
        },
        {
            id:2,
            name:'Peter'
        },
        {
            id:3,
            name:'Richard'
        },{
            id:4,
            name:'Joy'
        }
    ]
    const[text,setText]=React.useState('')
    const[search,setSearch]=React.useState('')

    const handleText = (event) =>{
        setText(event.target.value)
    }

    const handleSerach =() => {
        setSearch(text)
    }

    const filteredData=useMemo(()=>users.filter((user)=>{
        console.log('hiii')
        return user.name.includes(search)
    }),[search])

    


    return(
        <div>
            <h1>Use Memo</h1>
            <input type='text' onChange={handleText}/> 
            <button type="button" onClick={handleSerach}>search</button> 
            <DisplayUser userList={filteredData}/>
        </div>
    )
}

function DisplayUser({userList}){

    return(
            <ul>
                {
                   userList && userList.map((user)=>(
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
    )
}

export default UseMemoDemo