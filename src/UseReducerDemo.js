import React, { useReducer } from "react";

const initialState = {count:0}

function reducer(state,action){
    console.log("hiiiii");
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        default:
            return state.count

    }
}

function UseReducerDemo(){

    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        
        <div>
            <center>
            <h1>Use Reducer Demo</h1>
            <p>Count:{state.count}</p>
            <button type="button" id="btn" onClick={()=> dispatch({type:'increment'})}>Increment</button>
            <button type="button" id="btn" onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
            </center>
        </div>

    )
}

export default UseReducerDemo