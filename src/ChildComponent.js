


function ChildComponent(props){

    return(

        <div>
            <h2>Child Component!!</h2>
            <p>Message: {props.message}</p>
            <p>message1:{props.message1}</p>
        </div>
    )
}

export default ChildComponent