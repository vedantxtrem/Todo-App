import { useState } from "react"

function Todo({todoData, isFinished, changeFinished, onDelete, onEdit}){
    const [finished,setFinished] = useState(isFinished);
    const [isEditting,setIsEditting] = useState(false);
    const [editText,setEditText]= useState(todoData);

    return(
        <div className="flex flex-col gap-4">
            <div className="mt-3">
            <input className="rounded-full mx-3" type="checkbox" onChange={(e)=> {
                console.log(e.target.checked) 
                setFinished(e.target.checked) 
                changeFinished(e.target.checked)
                }} />
            {(isEditting) ? <input className="w-fit px-4 py-1 rounded-md"  type="text" value={editText} onChange={e => setEditText(e.target.value)}/> : <span className="px-4 py-1 rounded-md bg-white text-black " >{todoData}</span> }

            <button className="px-4 py-1 mx-2 rounded-md bg-green-500 text-black " onClick={()=>{
                setIsEditting(!isEditting)
                onEdit(editText)
            }}> 
                {(isEditting)? 'Save' : 'Edit'}
            </button>

            <button className="px-4 py-1 rounded-md bg-red-700 text-white mx-2" onClick = {onDelete} > Delete </button>
            </div>
        </div>
    )
}
export default Todo;