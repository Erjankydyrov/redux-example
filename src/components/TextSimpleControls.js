import { useState } from "react"
import { useDispatch } from "react-redux"

const TextSimpleComtrols = () => {
    const dispatch = useDispatch()

    const [size, setSize] = useState(16)

    function textChangeCallBack({ target }) {
        dispatch({ type: "set_text", text: target.value })
    }

    function sizeChangeCallBack() {
        dispatch({ type: "size", size: size })
    }
    return ( 
        <div>
            <input type="text" onChange={textChangeCallBack} />
            <input type="text" onChange={({ target }) => setSize(target.value)} />
            <button onClick={sizeChangeCallBack}>add size</button>
        </div>
    );
}
 
export default TextSimpleComtrols;