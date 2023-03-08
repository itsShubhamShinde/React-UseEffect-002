import './App.css';
import { useEffect, useState } from 'react';
import Cart from './Component/Cart';
import Search from './Component/Search';

function App() {
  const [inputvalue, setInputvalue] = useState("iron")
  const [output, setOutput] = useState([])
  const [value, setValue] = useState("")

  useEffect(() => {
    // console.log("app",inputvalue);
  const data= async()=>{
    const  res = await fetch(`https://www.omdbapi.com/?s=${inputvalue}&apikey=95a8b1ee`)
    const data = await res.json()
    // console.log(data.Search)
    setOutput(data.Search)

  }
  data();
  
  }, [inputvalue])

  return (
    <div className="App">
      <Search inputvalue={inputvalue} setInputvalue={setInputvalue} value={value} setValue={setValue} />
      <Cart output={output} />
    </div>
  );
}

export default App;
