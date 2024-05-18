import { useState } from "react"

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const [finished,setFinished] = useState(isFinished);
    const [isEditting,setIsEditting] = useState(false);
    const [editText,setEditText]= useState(todoData);
    return(
        <div>
            <input type="checkbox" onChange={(e)=> {
                console.log(e.target.checked) 
                setFinished(e.target.checked) 
                changeFinished(e.target.checked)
                }} />
            {(isEditting) ? <input type="text" value={editText} onChange={e => setEditText(e.target.value)}/> : <span>{todoData}</span> }
            <button onClick={()=>{
                setIsEditting(!isEditting)
                onEdit(editText)
            }}> 
                {(isEditting)? 'Save' : 'Edit'}
             </button>
            <button onClick={onDelete}> Delete </button>
        </div>
    )
}
export default Todo;