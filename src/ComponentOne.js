import React from "react";

class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log('Component one unmounted!!');
    }

    render(){
        return(
            <div>
                <h2>Component One !!</h2>
                <p>This is Component One</p>
            </div>
        )
    }
}

export default ComponentOne