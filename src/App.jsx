import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,increment_by_amount } from "./redux/slices/counter";
function App() {
  const countVar = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return <>
    {countVar}
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrementt</button>
    <button onClick={()=>dispatch(increment_by_amount(10))}>increase 10</button>
  </>;
}

export default App;
