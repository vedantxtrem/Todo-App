import React, { useContext, useState } from 'react'
import TodoDispatchcontext from '../context/TodoDispatchcontext';

function AddTodo() {

  const [inputText,setInputText]= useState('');
  const {dispatch} = useContext (TodoDispatchcontext);

  return (
    <div>
        <input type="text" name="" id="" 
         value={inputText} placeholder='add your text' 
         onChange={ e => setInputText(e.target.value)}
        />
        <button onClick={()=>{
            dispatch({type: 'add_todo', payload: {todoText : inputText }})
            setInputText('');
        }}
        >Add</button>
    </div>
  )
}

export default AddTodo;