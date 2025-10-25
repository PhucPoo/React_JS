import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// const gift =[
//   "CPU I9",
//   "RAM 32GB",
//   "SSD 1TB"
// ]




function App() {
  

  
  

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(()=>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    return storageJobs ;
  });

  //  const [getgift, setGetGift] = useState(()=>"Nhận lấy phần thưởng");
  //   const handleClick = () => {
  //     const randomgift = Math.floor(Math.random() * gift.length);
  //     console.log(randomgift);

  //     setGetGift(gift[randomgift]);
  //   }
  const handleSubmit = () => {
    setJobs(prev =>{
      const newJob =  [...prev, job]
      // Save to localStorage
      const jsonJobs = JSON.stringify(newJob);

      localStorage.setItem('jobs', jsonJobs);

      return newJob;
    }

    );
    setJob('');
  }



  return (


    <div >
      <input
        type="text"
        placeholder='Nhập việc đã làm'
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Thêm</button>
      <ul>
        {jobs.map((job => (
          <li key={job}>{job}</li>
        )))}
      </ul>
    </div>
  );
}

export default App;
