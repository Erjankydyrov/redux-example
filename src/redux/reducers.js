const initialState = {
    number: 0,
}

const counterReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "increment_by_1":
            return { ...state, number: state.number + 1 }
        case "decrement_by_1":
            return { ...state, number: state.number - 1 }
        case "increment_by_10":
            return { ...state, number: state.number + 10 }
        case "decrement_by_10":
            return { ...state, number: state.number - 10 }
        case "multiply_by_2":
            return { ...state, number: state.number * 2 }
        case "divide_by_2":
            return { ...state, number: state.number / 2 }
        case "reset":
            return { ...state, number: state.number = 0}
        case "random":
            return { ...state, number: state.number = Math.floor(Math.random() * (1000 - 100)) + 0}

        case "set_number":
            newState.number = action.number;
            return newState;
        case "set_number2":
            newState.number = action.number;
            return newState;
    }
    
    return state;
}

export default counterReducer;