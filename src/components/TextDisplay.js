import { useSelector } from "react-redux";

const TextDisplay = () => {
    const text = useSelector(store => store.text.text.split(""))
    const size = useSelector(store => store.text.size)
    const color = useSelector(store => store.color.color)

    console.log(text);

    const style = {
        fontSize: `${size}px`,
        color: `${color}`
    };
    
    return ( 
        <div>
            <p style={style}>{text}</p>
        </div>
    );
}
 
export default TextDisplay;