import { useState } from "react"

function Todo({todoData,isFinished,changeFinished}){
    const [finished,setFinished] = useState(isFinished);
    return(
        <div>
            <input type="checkbox" onChange={(e)=> {
                console.log(e.target.checked) 
                setFinished(e.target.checked)
                changeFinished(e.target.checked)
                }} />
            {todoData}
            <button> Edit </button>
            <button> Delete </button>
        </div>
    )
}
export default Todo