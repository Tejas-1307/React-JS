
import React from "react"
import { useParams } from "react-router-dom"
function About(){

    const {message}=useParams()

    return(
        <div>
        <h1>About Component</h1>
        <p>this is about </p>
        <p>Message is:{message}</p>
        </div>
    )
}

export default About
