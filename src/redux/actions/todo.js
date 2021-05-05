import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./types";

export const add = (text) => ({
    type: ADD_TODO,
    text: text,
});

export const remove = (id) => ({
    type: REMOVE_TODO,
    id: id,
});

export const toggle = (id) => ({
    type: TOGGLE_TODO,
    id: id
});

export const delayedADD = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(text));
    }, 3000);
  }
}

export const delayedREMOVE = (id) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(remove(id));
      }, 3000);
    }
}