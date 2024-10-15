import React, { useState } from 'react'

interface TodoInputProps{
    addTodo:(task:string)=>void
}



const TodoInput:React.FC<TodoInputProps> = ({addTodo}) => {
    const [task,setTask]=useState<string>("")

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        if(task.trim()){
            addTodo(task)
            setTask("")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} 
            placeholder='Add a new Task'
            />
            <button type='submit'>sumit</button>
            
        </form>
    </div>
  )
}

export default TodoInput