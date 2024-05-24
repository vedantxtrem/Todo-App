import Todo from '../Todo/Todo'
import { useSelector } from 'react-redux';

function TodoList({delete_todo,todoFinished ,editTodo}) {
    const list = useSelector((state) => state.todo);


    function onfinished(todo, isFinished) {
        todoFinished(todo,isFinished)
    }

    function onDelete(todo) {
        delete_todo(todo)
    }

    function onEdit(todo, todoText) {
        editTodo(todo,todoText)
    }

    return (
        <div>
            {list.length > 0 && list.map(todo => 
            <Todo
                todoData={todo.todoData}
                isFinished={todo.finished}
                id={todo.id}
                key={todo.id}

                changeFinished={(isFinished) => onfinished(todo, isFinished)}

                onDelete={() => onDelete(todo)}

                onEdit={(todoText) => onEdit(todo, todoText)}

            />
            )}
        </div>
    )
}
export default TodoList