import React, {useState} from 'react';
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

function TodoApp() {
    const [showAddTodo, setShowAddTodo] = useState(false);

    return (
        <div>
            {showAddTodo ? (
                <div>
                    <div className="ui fixed inverted borderless massive menu">
                        <div className="ui text container">
                            <div className="header item">
                                Todo App
                            </div>
                            <div className="right menu">
                                <div className="item">
                                    <SearchBar/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop: "5em"}} className="ui  main  grid container">
                        <div className="row">
                            <div className="four wide column">
                                <Filter/>
                            </div>
                            <div className="six wide column">
                                <AddTodo/>
                                <VisibleTodoList/>
                            </div>
                        </div>
                    </div>
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
