import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Content from './Content';



function App() {
  const [show, setShow] = useState(false);
 
  

  //  const [getgift, setGetGift] = useState(()=>"Nhận lấy phần thưởng");
  //   const handleClick = () => {
  //     const randomgift = Math.floor(Math.random() * gift.length);
  //     console.log(randomgift);

  //     setGetGift(gift[randomgift]);
  //   }
  const handleSubmit = () => {
    setShow(!show);
  }
  
  return (
    <div >

      <button
        onClick={handleSubmit}
      >
        Toggle
      </button>

      {show && <Content />}

    </div>
  );
}

export default App;
