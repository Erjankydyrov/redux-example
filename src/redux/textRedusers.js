const initialState = {
    text: "",
}

const textRedusers = (state = initialState, action)  => {
    const newState = { ...state };
    switch (action.type) {
        case "set_text":
            newState.text = action.text;
            return newState;
    }
    
    return state;
}
 
export default textRedusers;