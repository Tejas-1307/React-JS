import React from "react";

function ReadInput(){
  const[val1,setVal1]=React.useState('')
  const[val2,setVal2]=React.useState('')
  const[val3,setVal3]=React.useState('')
  const[val4,setVal4]=React.useState('')

  const[name,setName]=React.useState('')
  const[address,setaddress]=React.useState('')
  const[contact,setContact]=React.useState('')
  const[email,setEmail]=React.useState('')

  const setValue1=(event)=>{
    // console.log(event.target); 
    setVal1(event.target.value);
  }
  const setValue2=(event)=>{
    setVal2(event.target.value);
  }
  const setValue3=(event)=>{
    setVal3(event.target.value);
  }
  const setValue4=(event)=>{
    setVal4(event.target.value);
  }

  const displayValue=()=>{
    setName(val1)
    setaddress(val2)
    setContact(val3)
    setEmail(val4)

  }
    return(
      <div id="form">
        <h1>Read Input!!</h1>
        <label>Name : </label>
       <input type="text" onChange={setValue1}></input>
        <br></br>
        <br></br>

        <label>Address : </label>
       <input type="text" onChange={setValue2}></input>
        <br></br>
        <br></br>

        <label>Contact : </label>
       <input type="text" onChange={setValue3}></input>
        <br></br>
        <br></br>

        <label>Email : </label>
       <input type="email" onChange={setValue4}></input>
        <br></br>
        <br></br>

       <button type="button" onClick={displayValue}>Display</button>

       <p>Name   : {name}</p>
       <p>Address: {address}</p>
       <p>Contact: {contact}</p>
       <p>Email: {email} </p>
      </div>
    );
  }

  export default ReadInput;