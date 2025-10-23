import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// const gift =[
//   "CPU I9",
//   "RAM 32GB",
//   "SSD 1TB"
// ]
const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "JavaScript"
  },
  {
    id: 3,
    name: "ReactJS"
  }
]



function App() {
  const [checked, setChecked] = useState(1);

  //  const [getgift, setGetGift] = useState(()=>"Nhận lấy phần thưởng");
  //   const handleClick = () => {
  //     const randomgift = Math.floor(Math.random() * gift.length);
  //     console.log(randomgift);

  //     setGetGift(gift[randomgift]);
  //   }

  const register = () => {
    console.log(checked);
    
  }


  return (


    <div >
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button
        onClick={register}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
