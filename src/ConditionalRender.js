import React from "react"

function ConditionalRender(){

    const[status,setStatus]=React.useState(false)

    const changeStatus = () =>{
        setStatus(!status)
    }

    const checkStatus=()=>{

        if(status)
        {
            return(
                <div>Hii</div>
            )
        }
        else
        {
            return(
                <div>Hello</div>
            )
        }
    }

    return(
        <center>
        <div>
            <h1>Conditional Renders</h1>
        {
                // status ?(<div>Hii</div>):(<div>Hello</div>)
                checkStatus()
            }
            <button onClick={changeStatus}>change</button>
        </div>
        </center>
    )
}

export default ConditionalRender