import React from 'react'
import {ACTION} from '../Todos/Todos'
import './Todo.css'

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.isCompleted ? "#AAA" : "#000" }}>{todo.name}</span>
      <button onClick={() => dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
      <button onClick={(e) => {
        
        dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })}
      }>Toggle</button>
    </div>
  )
}
