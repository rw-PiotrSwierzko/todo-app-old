export const setTodo = (todo) => ({
    type: "SET_TODO", payload: todo
});

export const addTodo = (todo) => ({
    type: "ADD_TODO", payload: todo
});

export const deleteTodo = (todoId) => ({
    type: "DELETE_TODO", payload: todoId
});

export const toggleTodo = (todoId) => ({
    type: "TOGGLE_TODO", payload: todoId
});

export const setEditMode = (editMode) => ({
    type: "SET_EDIT_MODE", payload: editMode
});

export const editTodo = (todo) => ({
    type: "EDIT_TODO", payload: todo
});

export const setVisibilityFilter = (filter) => ({
    type: "SET_VISIBILITY_FILTER", payload: filter
});

export const setSearchTerm = (searchTerm) => ({
    type: "SET_SEARCH_TERM", payload: searchTerm
});