
import { useContext } from 'react';
import Todo from '../Todo/Todo'
import TodoContext from '../context/TodoContext.js';

function TodoList() {
    const {list,setList} = useContext(TodoContext);

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
                });
                setList(updatelist);
                
            }}
            onDelete = {()=>{
                const updatelist =  list.filter(t => t.id != todo.id);
                setList(updatelist);
            }}

            onEdit = {(todoText)=>{
                const updatelist =  list.map(t =>{
                    if(t.id == todo.id){
                        todo.todoData = todoText;
                    }
                    return t;
                });
                setList(updatelist);
            }}
            />) }
        </div>
    )
}
export default TodoList