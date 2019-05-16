import React, {useContext, useState} from 'react';
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Filter from "../components/Filter";
import SearchBar from "./SearchBar";
import NoTodo from "../components/NoTodo";
import {Store} from "../context";

function TodoApp() {
    const [showAddTodo, setShowAddTodo] = useState(false);
    const {state} = useContext(Store);

    return (
        <div className="h-100">
            {showAddTodo || state.todos.length > 0 ? (
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
                    <div style={{paddingTop: "5em"}} className="ui four column centered grid">
                        <div className="row">
                            <div className="column">
                                <Filter/>
                            </div>
                            <div className="column">
                                <AddTodo/>
                                <VisibleTodoList/>
                            </div>
                            <div className="column"/>
                        </div>
                    </div>
                </div>
            ) : (
                <NoTodo onButtonClick={() => setShowAddTodo(true)}/>
            )}
        </div>
    );
}

export default TodoApp;
