import { useSelector } from "react-redux";

const TextDisplay = () => {
    const text = useSelector(store => store.text.text)
    
    return ( 
        <div>
            {text}
        </div>
    );
}
 
export default TextDisplay;