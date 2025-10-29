import './App.css';
import {  useReducer } from 'react';

// useState
// 1.init state: 0
// 2. Actions: up (state + 1) /Down (state - 1)

// useReducer
// 1.Init state: 0
// 2. Actions : Up (state + 1) /Down (state -1 )
// 3. Reducer 
// 4. Dispatch

const initState =0

const Up_Action ='up'

const Down_Action ='down'


//Reducer
const reducer =(state,action) =>{
  switch(action){
    case Up_Action:
      return state + 1
    case Down_Action:
      return state -1
    default:
      throw new Error('Invalid action')
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer,initState)
  

  return (
    <div >

     <h1>{count}</h1>
      <button
        onClick={()=>dispatch(Down_Action)}
      >
        Dowwn
      </button>
      <button
        onClick={() =>dispatch(Up_Action)}
      >
        Up
      </button>
      

    </div>
  );
}

export default App;
