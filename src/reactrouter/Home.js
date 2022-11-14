
import React from "react"
import {useNavigate } from "react-router-dom"
function Home(){

    const navigate = useNavigate()

    // const navigate1 = useNavigate()

    const message = "Tejas"

    const message1 = "Amit"

    const sendInfo = () =>{
        navigate(`/about/${message}`)

    }


    return(
        <div>
        <h1>Home Component</h1>
        <p>this is Home</p>
        <button onClick={sendInfo}>send</button>       
        </div>
    )
}

export default Home