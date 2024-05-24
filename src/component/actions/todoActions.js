import {FINISH_TODO,EDIT_TODO,DELETE_TODO,ADD_TODO} from '../Constants/action.js'

export const todoFinished = (todo,isFinished)=> ({ type: FINISH_TODO, payload: { todo, isFinished: isFinished } });
export const add_todo = (inputText)=> ({type: ADD_TODO, payload: {todoText : inputText }});
export const delete_todo = (todo) => ({ type: DELETE_TODO, payload: { todo } });
export const editTodo = (todo,todoText) => ({ type: EDIT_TODO, payload: { todo, todoText } });