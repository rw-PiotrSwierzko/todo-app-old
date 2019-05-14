export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case "DELETE_TODO": {
            let todos = [...state.todos];
            const index = todos.findIndex(todo => todo.id === action.payload);
            todos.splice(index, 1);
            return {
                ...state,
                todos: todos
            };
        }
        case "EDIT_TODO": {
            let todos = [...state.todos];
            const index = todos.findIndex(todo => todo.id === action.payload.id);
            todos[index].text = action.payload.text;
            return {
                ...state,
                todos: todos
            };
        }
        case "TOGGLE_TODO": {
            let todos = [...state.todos];
            const index = todos.findIndex(todo => todo.id === action.payload);
            todos[index].completed = !todos[index].completed;
            return {
                ...state,
                todos: todos
            };
        }
        case "SET_VISIBILITY_FILTER":
            return {
                ...state,
                filter: action.payload
            };
        case "SET_TODO":
            return {
                ...state,
                todo: action.payload
            };
        case "SET_EDIT_MODE":
            return {
                ...state,
                editMode: action.payload
            };
        default:
            return state;
    }
};