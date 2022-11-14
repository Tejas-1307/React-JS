
import React from "react"
import { useLocation } from "react-router-dom"
function Services(){

    const location=useLocation()

    return(
        <div>
        <h1>Services Component</h1>
        <p>this is Services </p>
        <p>FirstName: {location.state.firstName}</p>
        <p>LastName: {location.state.lastName}</p>
        </div>
    )
}

export default Services