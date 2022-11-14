import React from "react"

import ChildComponent from "./ChildComponent"

import ChildComponentTwo from "./ChildComponentTwo"

// import PropsAdd from "./PropsAdd"

// props -> passing of information form one component to another component.

function PropsDemo(){

    const message= "Props Data"

    const message1= "Hello PropsDemo"

    const user = [{

        id:1,
        name:"A",
        city:"pune"
    },{

        id:2,
        name:"B",
        city:"satara"
    }]

    return(

        <div>
            <h1>Props Demo!!</h1>
            <ChildComponent message={message} message1={message1}/>
            <ChildComponentTwo user={user}/>
        </div>
    )   
}





export default PropsDemo