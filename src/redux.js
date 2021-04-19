const redux = require("redux");
const createStore = redux.createStore;
const initialState = {
  number: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = { ...state };
      newState.number++;
      return newState;
    case 'DECREMENT':
      const newState2 = { ...state };
      newState2.number--;
      return newState2;
    case 'INCREMENT_BY_10':
      const newState3 = { ...state };
      newState3.number += 10;
      return newState3;
  }
  return state;
}

// Store
const store = createStore(counterReducer);

// Subscriber
store.subscribe(() => {
  console.log(store.getState());
});

// Action
const newAction = { type: "INCREMENT" };
store.dispatch(newAction);
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT_BY_10" });