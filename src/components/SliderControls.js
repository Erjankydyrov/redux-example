import { useState } from "react";
import { useDispatch } from "react-redux";

const SliderControls = () => {
    const dispatch = useDispatch();

    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)

    function colorCallback(){
        dispatch({type: "color", color: `rgb(${r}, ${g}, ${b})`})
    }

    return ( 
        <div>
            <input type="range" min={0} max={255} onChange={({target})=> {setR(target.value); colorCallback()}}/>
            <input type="range" min={0} max={255} onChange={({target})=> {setG(target.value); colorCallback()}}/>
            <input type="range" min={0} max={255} onChange={({target})=> {setB(target.value); colorCallback()}}/>
        </div>
    );
}
 
export default SliderControls;