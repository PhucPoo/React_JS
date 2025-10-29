
import './App.css'
import { useStore, actions } from './store';



function App() {
  const [state, dispatch] = useStore()
  console.log(state);

  const handleAdd = () => {
    dispatch(actions.addTodo(state.todoInput))
  }

  return (
    <div>
      <input
        value={state.todoInput}
        placeholder='Enter todo'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>
        Add
      </button>
      <ul>
        {state.todos.map((todo,index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

    </div>

  )
}

export default App