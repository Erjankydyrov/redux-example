import { useDispatch } from "react-redux";

const ColorSimple = () => {
    const dispatch = useDispatch();
    
    function colore({ target }) {
        dispatch({ type: "color", color: target.value })
    }

    return ( 
        <div>
            <input type="color" onChange={colore}/>
        </div>
    );
}
 
export default ColorSimple;