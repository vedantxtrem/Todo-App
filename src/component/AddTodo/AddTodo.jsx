import React, { useState } from 'react'

function AddTodo({updatelist}) {
    const [inputText,setInputText] = useState('');
  return (
    <div>
        <input 
            type="text" 
            value={inputText}
            placeholder='add your Todo'
            onChange={e => setInputText(e.target.value)}
        />

        <button onClick={() => updatelist(inputText)} >Add</button>
    </div>
  )
}

export default AddTodo