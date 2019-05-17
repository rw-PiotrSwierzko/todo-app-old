import reducer from "./reducer";
import {
    addTodo,
    deleteTodo,
    editTodo,
    setEditMode,
    setSearchTerm,
    setTodo,
    setVisibilityFilter,
    toggleTodo
} from "../actions/actions";

describe('todos reducer', () => {
    it('should return initial state', () => {
        const state = {todos: []};
        const newState = reducer(state, {});
        expect(newState).toEqual({todos: []})
    });

    it('should add todo', () => {
        const state = {todos: []};
        const todo = {
            id: "1",
            text: "Watch rocket launch",
            completed: false
        };
        const newState = reducer(state, addTodo(todo));
        expect(newState.todos).toEqual([
            {
                id: "1",
                text: "Watch rocket launch",
                completed: false
            }
        ])
    });

    it('should delete todo', () => {
        const state = {
            todos: [
                {
                    id: "1",
                    text: "Watch rocket launch",
                    completed: false
                }
            ]
        };
        const newState = reducer(state, deleteTodo("1"));
        expect(newState.todos).toEqual([])
    });

    it('should edit todo', () => {
        const state = {
            todos: [{
                id: "1",
                text: "Watch rocket launch",
                completed: false
            }]
        };
        const newState = reducer(state, editTodo({id: "1", text: "Buy a Tesla car", completed: false}));
        expect(newState.todos).toEqual([
            {
                id: "1",
                text: "Buy a Tesla car",
                completed: false
            }
        ])
    });

    it('should toggle todo', () => {
        const state = {
            todos: [{
                id: "1",
                text: "Watch rocket launch",
                completed: false
            }]
        };
        const newState = reducer(state, toggleTodo("1"));
        expect(newState.todos).toEqual([
            {
                id: "1",
                text: "Watch rocket launch",
                completed: true
            }
        ])
    });

    it('should set visibility filter', () => {
        const newState = reducer({}, setVisibilityFilter("SHOW_ALL"));
        expect(newState.filter).toEqual("SHOW_ALL");
    });

    it('should set todo', () => {
        const todo = {
            id: "1",
            text: "Watch rocket launch",
            completed: false
        };
        const newState = reducer({}, setTodo(todo));
        expect(newState.todo).toEqual({
            id: "1",
            text: "Watch rocket launch",
            completed: false
        });
    });

    it('should set edit mode', () => {
        const newState = reducer({}, setEditMode(true));
        expect(newState.editMode).toEqual(true);
    });

    it('should set search term', () => {
        const newState = reducer({}, setSearchTerm("a"));
        expect(newState.searchTerm).toEqual("a");
    });

});