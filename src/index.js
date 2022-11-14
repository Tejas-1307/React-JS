import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReadInput from './ReadInput';
import ClassState from './ClassState';
import MultiInput from './MultiInput';
import PropsDemo from './PropsDemo';
import AddInput from './AddInput';
import PropsAdd from './PropsAdd';
import ComponentLifeCycleMethod from './ComponentLifeCycleMethod';
import UseEffectDemo from './UseEffectDemo';
import UseEffectExample from './UseEffectExample';
// import ConditionalRender from './ConditionalRender';
// import RenderPrac from './RenderPrac';
import App from './App';
import ContextOne from './reactrouter/contextAPI/ContextOne';
import CallBackEvent from './CallBackEvent';
import ApiCall from './ApiCall';
import UseMemoDemo from './UseMemoDemo';
// import ContextTwo from './reactrouter/contextAPI/ContextTwo';
import UseReducerDemo from './UseReducerDemo';


    
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   
    // <App/>
    // <CallBackEvent/>
    // <ContextOne/>
    // <ApiCall/>
    // <UseMemoDemo/>
    <UseReducerDemo/>


   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
