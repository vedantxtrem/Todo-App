import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import { useReducer, useState } from 'react'
import TodoContext from './component/context/TodoContext'
import todoReducer from './component/reducers/todoReducers.js'
import TodoDispatchcontext from './component/context/TodoDispatchcontext'

function App() {

  const [list, dispatch] = useReducer(todoReducer,[])

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchcontext.Provider value={{ dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoDispatchcontext.Provider>
    </TodoContext.Provider>
  )
}

export default App;
