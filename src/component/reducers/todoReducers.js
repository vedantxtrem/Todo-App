

function todoReducer(state, action) {

    if (action.type == 'add_todo') {
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;
        return [...state, { id: state.length + 1, todoData: todoText, finished: false }];

    }
    else if (action.type == 'delete_todo') {
        let todo = action.payload.todo;

        const updatelist = state.filter(t => t.id != todo.id);
        return updatelist;
    }
    else if (action.type == 'edit_todo') {
        let todo = action.payload.todo;

        let todoText = action.payload.todoText;

        const updatelist = state.map(t => {
            if (t.id == todo.id) {
                todo.todoData = todoText;
            }
            return t;
        });
        return (updatelist);
    }
    else if (action.type == 'finish_todo') {
        let todo = action.payload.todo;
        let isFinished = action.payload.isFinished;

        const updatedList = state.map(t => {
            if (t.id == todo.id) {
                todo.finished = isFinished;
            }
            return t;
        });
        return updatedList;
    }


}

export default todoReducer;