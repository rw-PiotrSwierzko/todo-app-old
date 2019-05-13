import React, {useContext, useState} from 'react';
import Todo from "./Todo";
import uuid from "uuid";
import {Store} from "./context";
import FilterLink from "./FilterLink";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case  "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_INCOMPLETED":
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

function TodoForm() {
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [editing, setEditing] = useState(false);
    const [todo, setTodo] = useState({id: '', text: '', completed: false});

    const {state, dispatch} = useContext(Store);

    function handleSubmit(e) {
        e.preventDefault();
        if (!todo.text.length) {
            return;
        }
        if (editing) {
            dispatch({type: "EDIT_TODO", payload: {id: todo.id, text: todo.text}});
            setEditing(false);
        } else {
            const newTodo = {
                id: uuid.v4(),
                text: todo.text,
                completed: false
            };
            dispatch({type: "ADD_TODO", payload: newTodo})
        }
        setTodo({id: '', text: '', completed: false});
    }

    function handleChange(e) {
        const text = e.target.value;
        setTodo({...todo, text});
    }

    function handleClick() {
        setShowAddTodo(true);
    }

    function handleEdit(todoId) {
        const index = state.todos.findIndex(todo => todo.id === todoId);
        const foundTodo = {...state.todos[index]};
        setTodo(foundTodo);
        setEditing(true);
    }

    return (
        <div className="ui container center aligned">
            {showAddTodo ? (
                <div>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="ui action input">
                            <input type="text" placeholder="New todo" value={todo.text} onChange={handleChange}/>
                            <button className="ui button" type="submit">{editing ? "Save" : "Add"}</button>
                        </div>
                    </form>
                    <div className="ui transparent icon input">
                        <input type="text" placeholder="Search..."/>
                        <i className="search icon"/>
                    </div>
                    <p>
                        Show:
                        <FilterLink filter="SHOW_ALL">All</FilterLink>
                        <FilterLink filter="SHOW_INCOMPLETED">Incomplete</FilterLink>
                        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                    </p>
                    {state.todos.length > 0 ? (
                        <div className="ui list">
                            {getVisibleTodos(state.todos, state.filter).map((todo, index) => (
                                <Todo key={index} todo={todo} onTodoClick={handleEdit}/>
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : (
                <div className="ui container">
                    <h2 className="ui header">No todo yet</h2>
                    <div className="sub header">Add todo to get started</div>
                    <button className="ui inverted primary button" onClick={handleClick}>New todo</button>
                </div>
            )}
        </div>
    );
}

export default TodoForm;
