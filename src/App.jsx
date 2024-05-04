import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import { useState } from 'react'

function App() {
  const [list,setList] = useState([
    {id:1,todoData: 'todo 1',finished: false},
    {id:2,todoData: 'todo 2',finished: false},
])
  return (
    <>
      <AddTodo updatelist={(todo)=> setList([...list,{id: list.length + 1 ,todoData : todo,finished : false}])} />
      <TodoList list={list} updatelist={setList} />
    </>
  )
}

export default App
