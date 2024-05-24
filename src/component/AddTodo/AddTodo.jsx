import { useState } from "react";

function AddTodo({add_todo}) {

  const [inputText,setInputText]= useState('');

  return (
    <div className="">
        <input type="text" name="" id="" className="p-2 rounded-2xl border-3 border-gray-400   " 
         value={inputText} placeholder='add your text' 
         onChange={ e => setInputText(e.target.value)}
        />

        <button className="bg-gray-400 px-4 rounded-2xl ml-3 p-2" onClick={()=>{
            add_todo(inputText);
            setInputText('');
        }}
        >Add</button>
    </div>
  )
}

export default AddTodo;