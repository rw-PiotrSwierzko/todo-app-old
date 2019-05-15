import React, {useState} from 'react';
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

function TodoApp() {
    const [showAddTodo, setShowAddTodo] = useState(false);

    return (
        <div className="ui container center aligned">
            {showAddTodo ? (
                <div>
                    <AddTodo/>
                    <SearchBar/>
                    <VisibleTodoList/>
                    <Filter/>
                </div>
            ) : (
                <div className="ui container">
                    <h2 className="ui header">No todo yet</h2>
                    <div className="sub header">Add todo to get started</div>
                    <button className="ui inverted primary button" onClick={() => setShowAddTodo(true)}>New todo
                    </button>
                </div>
            )}
        </div>
    );
}

export default TodoApp;
