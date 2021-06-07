import React from 'react'
import { TodoItem } from './TodoItem'

export function TodoList({todos, toggleTodo}) {
    return (
        <ul>
           {todos.map((todo)=>(
           <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />// recorremos el array e imprimismo elementos por cada componente del array
           ))}
        </ul>
    )
}
