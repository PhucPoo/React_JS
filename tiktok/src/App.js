import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import Content from './Content';



function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(preCount => preCount + 1)
  },[])

  return (
    <div >

      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
      



    </div>
  );
}

export default App;
