import { ADD_TODO, DELETE_TODO, EDIT_TODO, FINISH_TODO } from "../Constants/action";

function todoReducer(state = [], action) {
    
    switch (action.type) {
        case ADD_TODO:
            let todoText = action.payload.todoText;
            return [...state, { id: state.length + 1, todoData: todoText, finished: false }];
        
        case DELETE_TODO:
            let todoToDelete = action.payload.todo;
            return state.filter(t => t.id != todoToDelete.id);
        
        case EDIT_TODO:
            let todoToEdit = action.payload.todo;
            let updatedText = action.payload.todoText;
            return state.map(t => {
                if (t.id == todoToEdit.id) {
                    return { ...t, todoData: updatedText };
                }
                return t;
            });

        case FINISH_TODO:
            let todoToFinish = action.payload.todo;
            let isFinished = action.payload.isFinished;
            return state.map(t => {
                if (t.id == todoToFinish.id) {
                    return { ...t, finished: isFinished };
                }
                return t;
            });

        default:
            return state;
    }
}

export default todoReducer;
