
import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../context/TodoContext';

function TodoList() {
    const {list,SetList} = useContext(TodoContext)
    return(
        <div>
            {list.length > 0 && list.map(todo => <Todo  
            todoData={todo.todoData} 
            isFinished={todo.finished} 

            id = {todo.id} 
            key ={todo.id}
            changeFinished ={(isFinished)=>{
                console.log("isfinished",isFinished);
                const updatelist =  list.map(t =>{
                    if(t.id == todo.id){
                        todo.finished = isFinished;
                    }
                    return t;
                })
                SetList(updatelist)
                
            }}
            />) }
        </div>
    )
}
export default TodoList