import React, {useState} from 'react';
import TodoItem from "./TodoItem";

function App() {
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.length) {
            return;
        }
        const todo = {
            text: text,
            completed: false
        };
        setTodos([...todos, todo]);
        setText('');
    }

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick(e) {
        setShowAddTodo(true);
    }

    function handleDelete(todoId) {
        let array = [...todos];
        array.splice(todoId);
        setTodos(array)
    }

    return (
        <div className="ui container center aligned">
            {showAddTodo ? (
                <div>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="ui action input">
                            <input type="text" placeholder="New todo" value={text} onChange={handleChange}/>
                            <button className="ui button" type="submit">Add</button>
                        </div>
                    </form>
                    {todos.length > 0 ? (
                        <div className="ui list">
                            {todos.map((todo, index) => (
                                <TodoItem key={index} id={index} text={todo.text} onDelete={handleDelete}/>
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
