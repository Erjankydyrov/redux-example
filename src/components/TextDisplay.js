import { useSelector } from "react-redux";

const TextDisplay = () => {
    const text = useSelector(store => store.text.text)
    const size = useSelector(store => store.text.size)
    const style = {
        fontSize: `${size}px`,
    };
    
    return ( 
        <div>
            <p style={style}>{text}</p>
        </div>
    );
}
 
export default TextDisplay;