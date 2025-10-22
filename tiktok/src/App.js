import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const orders= [1000, 2000, 3000];

function App() {
  
  const [count, setCount] = useState(()=>{
    const total = orders.reduce((total, cur) => total + cur, 0);
    return total;
  });

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={handleClick}>Bấm vào</button>
    </div>
  );
}

export default App;
