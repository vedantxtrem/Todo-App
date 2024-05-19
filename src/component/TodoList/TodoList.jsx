
import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../context/TodoContext.js';
import TodoDispatchcontext from '../context/TodoDispatchcontext.js';



function TodoList() {
    const { list } = useContext(TodoContext);
    const { dispatch } = useContext(TodoDispatchcontext)

    function onfinished(todo, isFinished) {
        console.log("finished called");
        dispatch({ type: 'finish_todo', payload: { todo, isFinished: isFinished } })
    }

    function onDelete(todo) {
        console.log("delete called");
        dispatch({ type: 'delete_todo', payload: { todo } })
    }

    function onEdit(todo, todoText) {
        console.log("called edit");
        dispatch({ type: 'edit_todo', payload: { todo, todoText } })
    }

    return (
        <div>
            {list.length > 0 && list.map(todo => <Todo
                todoData={todo.todoData}
                isFinished={todo.finished}
                id={todo.id}
                key={todo.id}

                changeFinished={(isFinished) => onfinished(todo, isFinished)}

                onDelete={() => onDelete(todo)}

                onEdit={(todoText) => onEdit(todo, todoText)}

            />)}
        </div>
    )
}
export default TodoList