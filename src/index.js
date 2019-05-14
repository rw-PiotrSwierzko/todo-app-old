import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';
import {TodoProvider} from "./context";

function App() {
    return (
        <TodoProvider>
            <TodoApp/>
        </TodoProvider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));