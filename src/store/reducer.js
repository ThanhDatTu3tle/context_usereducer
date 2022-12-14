import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT, EDIT_TODO } from "./constant";

const initState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((t, index) => index !== action.index)
            }
        case EDIT_TODO:
            state.todos.splice(action.index, 1, action.payload);
            return state;
        default:
            throw new Error(`Invalid action!!!`)
    }
}

export { initState };
export default reducer;
