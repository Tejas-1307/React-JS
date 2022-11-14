import React from "react"

function CallBackEvent(){

    const[text,setText]=React.useState('')

    const handleChange=(event)=>
        setText(event.target.value) 

    return(
        <div>
            <h2>call back event demo</h2>
            <p>Text:{text}</p>
            <CheckCallBack onInputChange={handleChange}/>
        </div>
    )
}

function CheckCallBack({onInputChange}){

    return(
        <div>
            <h2>child component</h2>
            <input type='text' onChange={onInputChange}/>
        </div>
    )

}

export default CallBackEvent