import { useState } from "react";
import { useDispatch } from "react-redux";

const SliderControls = () => {
    const dispatch = useDispatch();

    const [color1, setColor1] = useState()
    const [color2, setColor2] = useState()
    const [color3, setColor3] = useState()
    
    function slider1({ target }) {
        dispatch({ type: "color", color: target.value})
    }
    function slider2({ target }) {
        dispatch({ type: "color", color: target.value})
    }
    function slider3({ target }) {
        dispatch({ type: "color", color: target.value})
    }

    return ( 
        <div>
            <input type="range" min="0" max="255" onChange={slider1}/>
            <input type="range" min="0" max="255" onChange={slider2}/>
            <input type="range" min="0" max="255" onChange={slider3}/>
        </div>
    );
}
 
export default SliderControls;