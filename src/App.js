import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useSelector,useDispatch  } from "react-redux";
import {increment,decrement} from './Redux/action';


function App() {
  const selector = useSelector(state => state)
  const dispatch=useDispatch()
  console.log("niki",selector)
  const [counter, setcounter] = useState(0)
  return (
    <div className="App">
      <h1>
        {counter}
      </h1>
      <button onClick={()=>setcounter(counter+1)}>INCREMENT</button>
     <h1>{selector.count}</h1>
      <button onClick={()=>dispatch(increment(selector.count))}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement(selector.count))}>DECREMENT</button>
    </div>
  );
}

export default App;
