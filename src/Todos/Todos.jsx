import React from 'react'
import Todo from '../Todo/Todo'
import { useReducer, useState } from 'react'

export const ACTION = {
    ADD_TODO: 'add',
    DELETE_TODO: 'delete',
    TOGGLE_TODO: 'toggle'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTION.TOGGLE_TODO:
            return todos.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            });
        case ACTION.DELETE_TODO:
            return todos.filter(item=>{
                return item.id != action.payload.id
            })
            
        default:
            return todos;
    }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        isCompleted: false // Corrected property name
    };
}

export default function Todos() {
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(reducer, [])

    function submitFormHandler(event) {
        event.preventDefault();
        dispatch({ type: ACTION.ADD_TODO, payload: { name: name } })
        setName('')
    }


    return (
        <>
            <form onSubmit={submitFormHandler}>
                <input value={name} type="text" onChange={e => setName(e.target.value)} />
            </form>

            {todos.map(item => {
                return <Todo key={item.id} todo={item} dispatch={dispatch} />
            })}
        </>
    )
}
