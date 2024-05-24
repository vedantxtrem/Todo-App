import { useDispatch } from 'react-redux';
import AddTodo from './component/AddTodo/AddTodo'
import TodoList from './component/TodoList/TodoList'
import { bindActionCreators } from 'redux';
import { add_todo,delete_todo,todoFinished ,editTodo } from './component/actions/todoActions';

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({add_todo,delete_todo,todoFinished,editTodo},dispatch);

  return (
    <div className='w-full h-screen flex flex-col gap-4 items-center justify-center bg-gray-800'>
      <AddTodo add_todo={actions.add_todo}/>
      <TodoList delete_todo={actions.delete_todo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
    </div>
  )
}

export default App;
