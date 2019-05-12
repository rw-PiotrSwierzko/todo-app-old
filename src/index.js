import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './TodoForm';
import {TodoProvider} from "./context";

function App() {
    return (
        <TodoProvider>
            <TodoForm/>
        </TodoProvider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));