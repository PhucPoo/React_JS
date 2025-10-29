import './App.css';
import {  useReducer, useRef } from 'react';

// useState
// 1.init state: 0
// 2. Actions: up (state + 1) /Down (state - 1)

// useReducer
// 1.Init state: 0
// 2. Actions : Up (state + 1) /Down (state -1 )
// 3. Reducer 
// 4. Dispatch

const initState = {
  job: '',
  jobs: []
}

const Set_Job = 'set_job'
const Add_Job = 'add_job'
const Delete_Job = 'delete_job'

const setJob =payload => {
  return {
    type: Set_Job,
    payload
  }
}
const addJob =payload => {
  return {
    type: Add_Job,
    payload
  }
}
const deleteJob =payload => {
  return {
    type: Delete_Job,
    payload
  }
}

let newState

const reducer = (state, action) =>{
console.log(action);

  switch(action.type){
    case Set_Job:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case Add_Job:
      newState ={
        ...state,
        jobs: [...state.jobs, action.payload]
      }
        break
    case Delete_Job:
      const newJobs =[...state.jobs]

      newJobs.splice(action.payload, 1)

      newState ={
        ...state,
        jobs:newJobs
      }
        break
  default:
    throw new Error("invalid action")
  }
  return newState
}

function App() {
  const [state, dispatch] = useReducer(reducer,initState)
  
  const { job, jobs} =state

  const inputRef = useRef()

  const handleSubmit = () =>{
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }
  

  return (
    <div >

     <h1>{}</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo ...'
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
    <ul>
      {jobs.map((job,index)=>(
        <li key={index}>{job} 
          <span onClick={()=>{dispatch(deleteJob(index))}}>&times;</span>
        </li>
      ))}
    </ul>
      

    </div>
  );
}

export default App;
