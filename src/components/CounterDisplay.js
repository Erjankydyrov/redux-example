import { useSelector } from "react-redux";

const CounterDisplay = () => {
    const number = useSelector(state => state.number);

    console.log(number)

    return ( 
        <h1>0</h1>
    );
}
 
export default CounterDisplay;