import React from "react"

class ClassState extends React.Component{

    constructor(){
        super() //call to constructor of base class
        this.state={
            number:0
        }
    }

    AddNumber = () => {
        this.setState({ number: this.state.number +1});
    }

    Subnumber = () => {
        this.setState({ number: this.state.number -1});
    }
    render(){
        return(
            <div>
                <h1>This is Class Component!!</h1>
                <p>Number:{this.state.number}</p>
                <button type="button" onClick={this.AddNumber}>ADD</button>
                <button type="button" onClick={this.Subnumber}>SUB</button>
            </div>
        )
    }
}

export default ClassState