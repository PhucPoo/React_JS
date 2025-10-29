import Content from "./Content"
import TodoApp from "./Todo"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import './App.css'



//Context
//comA=> ComB=>ComC

//Theme:dark/ light

// 1. Create context 
// 2. Provider
// 3. consumer

function App() {
  const context = useContext(ThemeContext)
  return (
      <div>

        <button onClick={context.toggleTheme}>Toggle</button>
        <Content  />

      </div>
   
  )
  // <TodoApp/> 


}

export default App