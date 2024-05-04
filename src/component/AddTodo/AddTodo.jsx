import React, { useState } from 'react'

function AddTodo({updatelist}) {

  const [inputText,setInputText]= useState('');
  return (
    <div>
        <input type="text" name="" id="" 
         value={inputText} placeholder='add your text' 
         onChange={ e => setInputText(e.target.value)}
        />
        <button onClick={()=>{
            updatelist(inputText);
            setInputText('');
        }}
        >Add</button>
    </div>
  )
}

export default AddTodo;