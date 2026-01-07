import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';

function App() {
  const [category, setCategory] = useState("general");
 
  return (
    <div className="App">
    <div className='head'>

    
      <h1>News Application</h1>
      <button className='btn1' onClick={() => setCategory("general")}>General</button>
      <button className='btn1' onClick={() => setCategory("technology")}>Technology</button>
      <button className='btn1' onClick={() => setCategory("sports")}>Sports</button>

    </div>





    <News category = {category}/>
  






    </div>
  );
}

export default App;
