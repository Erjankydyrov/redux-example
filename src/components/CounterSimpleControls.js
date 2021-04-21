import { useDispatch } from "react-redux";

const CounterSimpleControls = () => {

  const dispatch = useDispatch();

  function incrementBy1Callback() {
    dispatch({ type: "increment_by_1" });
  }
  
  function decrementBy1Callback() {
    dispatch({ type: "decrement_by_1" });
  }

  function incrementBy10Callback() {
    dispatch({ type: "increment_by_10" });
  }
  
  function decrementBy10Callback() {
    dispatch({ type: "decrement_by_10" });
  }

  function multiplyBy2Callback() {
    dispatch({ type: "multiply_by_2" });
  }
  
  function divideBy2Callback() {
    dispatch({ type: "divide_by_2" });
  }

  function resetCallback() {
    dispatch({ type: "reset" });
  }

  function randomCallback() {
    dispatch({ type: "random" });
  }

  return (
    <div>
      <button onClick={incrementBy1Callback}>+1</button>
      <button onClick={decrementBy1Callback}>-1</button>
      <button onClick={incrementBy10Callback}>+10</button>
      <button onClick={decrementBy10Callback}>-10</button>
      <button onClick={multiplyBy2Callback}>*2</button>
      <button onClick={divideBy2Callback}>/2</button>
      <button onClick={resetCallback}>reset</button>
      <button onClick={randomCallback}>random</button>
    </div>
  );
};
export default CounterSimpleControls;