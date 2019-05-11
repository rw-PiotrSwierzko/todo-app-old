import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import uuid from "uuid";

function App() {
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [editing, setEditing] = useState(false);
    const [todo, setTodo] = useState({id: '', text: '', completed: false});
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!todo.text.length) {
            return;
        }
        if (editing) {
            let array = [...todos];
            const index = todos.findIndex(item => item.id === todo.id);
            array[index].text = todo.text;
            setTodos(array);
            setEditing(false);
        } else {
            const newTodo = {
                id: uuid.v4(),
                text: todo.text,
                completed: false
            };
            setTodos([...todos, newTodo]);
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

    function handleDelete(todoId) {
        const index = todos.findIndex(todo => todo.id === todoId);
        let array = [...todos];
        array.splice(index, 1);
        setTodos(array)
    }

    function handleEdit(todoId) {
        const index = todos.findIndex(todo => todo.id === todoId);
        const foundTodo = {...todos[index]};
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
                    {todos.length > 0 ? (
                        <div className="ui list">
                            {todos.map((todo, index) => (
                                <TodoItem key={index} id={todo.id} text={todo.text} onDelete={handleDelete}
                                          onEdit={handleEdit}/>
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

export default App;
