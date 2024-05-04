import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import { useState } from 'react'
import TodoContext from './component/context/TodoContext'
function App() {
  const [list,setList] = useState([
    {id:1,todoData: 'todo 1',finished: false},
    {id:2,todoData: 'todo 2',finished: false},
  ])

  return (
    <TodoContext.Provider value={{list,setList}}>
      <AddTodo updatelist={(todo)=> setList([...list,{id: list.length + 1 ,todoData : todo,finished : false}])} />
      <TodoList  />
    </TodoContext.Provider>
  )
}

export default App
