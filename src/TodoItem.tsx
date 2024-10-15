import React from 'react'
import { Todo } from './types'

interface TodoItemProps{
    todo:Todo;
    toggleComplete:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}


const TodoItem:React.FC<TodoItemProps> = ({todo,toggleComplete,deleteTodo}) => {
  return (
    <div>
        <li style={{textDecoration:todo.completed?'line-through':"none"}}></li>
        <span onClick={()=>toggleComplete(todo.id)}>{todo.task}</span>
        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem