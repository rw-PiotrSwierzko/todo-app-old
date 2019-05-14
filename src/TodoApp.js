import React, {useState} from 'react';
import FilterLink from "./FilterLink";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";


function TodoApp() {
    const [showAddTodo, setShowAddTodo] = useState(false);

    return (
        <div className="ui container center aligned">
            {showAddTodo ? (
                <div>
                    <AddTodo/>
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
                    <VisibleTodoList/>
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
