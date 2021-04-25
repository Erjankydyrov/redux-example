const initialState = {
    text: "",
    size: 16,
}

const textRedusers = (state = initialState, action)  => {
    const newState = { ...state };
    switch (action.type) {
        case "set_text":
            newState.text = action.text;
            return newState;
        case "size":
            newState.size = action.size;
            return newState;
    }
    
    return state;
}
 
export default textRedusers;