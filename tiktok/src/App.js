import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const gift =[
  "CPU I9",
  "RAM 32GB",
  "SSD 1TB"
]

  

function App() {

 const [getgift, setGetGift] = useState(()=>"Nhận lấy phần thưởng");
  const handleClick = () => {
    const randomgift = Math.floor(Math.random() * gift.length);
    console.log(randomgift);
    
    setGetGift(gift[randomgift]);
  }
   
  
  return (
    
    <div >
      <h1>{getgift}</h1>
      <button onClick={handleClick}>Lấy thưởng</button>
    </div>
  );
}

export default App;
