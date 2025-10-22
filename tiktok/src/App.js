import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const orders= [1000, 2000, 3000];

function App() {
  
  const [info, setInfo] = useState({
    name: 'Hoang',
    age: 18,
    address: 'HN'
  });
  const handleClick = () => {
    setInfo({
      ...info,
      bio: "Đẹp zai vcl"
    });
  };

  return (
    <div className="App">
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleClick}>bấm đi</button>
    </div>
  );
}

export default App;
