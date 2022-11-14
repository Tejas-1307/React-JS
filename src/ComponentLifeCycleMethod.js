import React from "react"
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

class ComponentLifeCycleMethod extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }
 

    componentDidMount(){
        console.log('in component did mount');
    }

    componentDidUpdate(){
        console.log('in update method');
    }

    handleUpdate=()=>{
        this.setState({number:this.state.number+1})
    }

     render(){
        const component=this.state.number ? <ComponentOne/> : <ComponentTwo/>
        return(
            <div>
                <h1>Life Cycle Method</h1>
                <button type="button" onClick={this.handleUpdate}>Add</button>
                
                <p>number is: {this.state.number}</p>
                {component}

            </div>
        )
     }
    }

    export default ComponentLifeCycleMethod
