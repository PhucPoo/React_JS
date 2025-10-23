import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// const gift =[
//   "CPU I9",
//   "RAM 32GB",
//   "SSD 1TB"
// ]



function App() {

  //  const [getgift, setGetGift] = useState(()=>"Nhận lấy phần thưởng");
  //   const handleClick = () => {
  //     const randomgift = Math.floor(Math.random() * gift.length);
  //     console.log(randomgift);

  //     setGetGift(gift[randomgift]);
  //   }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name);
  const register = () => {
      // Call API
      console.log("Register", {name, email});
  }


  return (


    <div >
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        onClick={register}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
