import React from "react"

function PropsAdd(){
    const [values,setValues]= React.useState([])
    
    const message = "hello"
    const message1 = "hello world"

    let value

    const handleInput = (event) => {
        value=event.target.value
    }

    const Adddata = (e) => {
        e.preventDefault()
        setValues([...values,value])
        document.getElementById("form").reset();
        

    }

    return(

        <div>

            <h1>PropsAdd!!</h1>

            <form id="form">

            <input type="text" onChange={handleInput}/>
            <button type="button" onClick={Adddata}>Add</button>
            </form>
            <ChildComponent message={message}
                            message1={message1}/>

            <ChildComponentTwo values = {values}/>
            
        </div>

    )    
}

function ChildComponent(props){
    return(
        <div>
            <h2 className="font-bold">Child Component</h2>
           <p>message:{props.message}
                message1:{props.message1}</p>
        </div>
    )
}

function ChildComponentTwo(props){

    return(

        <div>
            <center>
            <h2>Child Component Two</h2>

            {/* <ul> */}
                {
                    props.values.map((val,index)=>
                        <li key={index}>{val}
                        </li>)
                }
            {/* </ul> */}
            </center>
        </div>
    )
}

export default PropsAdd