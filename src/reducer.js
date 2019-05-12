export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case "DELETE_TODO": {
            console.log("DELETE_TODO");
            let todos = [...state.todos];
            const index = todos.findIndex(todo => todo.id === action.payload);
            todos.splice(index, 1);
            return {
                ...state,
                todos: todos
            };
        }
        case "EDIT_TODO": {
            console.log("EDIT_TODO");
            let todos = [...state.todos];
            const index = todos.findIndex(todo => todo.id === action.payload.id);
            todos[index].text = action.payload.text;
            return {
                ...state,
                todos: todos
            };
        }
        default:
            return state;
    }
};