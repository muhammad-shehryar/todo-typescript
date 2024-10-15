import React,{useState} from 'react'
import { Todo } from './types'


const App:React.FC = () => {
    const [todos,setTodos]=useState<Todo[]>([])
  return (
    <div>App</div>
  )
}

export default App