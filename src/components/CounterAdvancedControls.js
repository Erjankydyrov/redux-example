import { useState } from "react";
import { useDispatch } from "react-redux";

const CounterAdvancedControls = () => {
    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const dispatch = useDispatch();

    function setCallback() {
        dispatch({ type: "set_number", number: +number });
    }

    function setCallback2() {
        dispatch({ type: "set_number2", number: +number1 + +number2 });
    }

    return ( 
        <div>
        <h2>Advanced controls</h2>
        <div>
            <input type="number" onChange={({ target }) => setNumber(target.value)} />
            <button onClick={setCallback}>Set</button>
        </div>
        <hr />
        <div>
            <input type="number" onChange={({ target }) => setNumber1(target.value)} />
            <input type="number" onChange={({ target }) => setNumber2(target.value)} />
            <button onClick={setCallback2}>Set result</button>
        </div>
        <hr />
        </div>
    );
}
 
export default CounterAdvancedControls;