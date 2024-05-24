import { useState } from "react";

function AddTodo({add_todo}) {

  const [inputText,setInputText]= useState('');

  return (
    <div>
        <input type="text" name="" id="" 
         value={inputText} placeholder='add your text' 
         onChange={ e => setInputText(e.target.value)}
        />

        <button onClick={()=>{
            add_todo(inputText);
            setInputText('');
        }}
        >Add</button>
    </div>
  )
}

export default AddTodo;