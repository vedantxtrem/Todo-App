import { createStore,combineReducers } from "redux";
// Reducers imports 

import todoReducer from "./component/reducers/todoReducers";

const reducers = combineReducers({todo: todoReducer})


const store = createStore(reducers);

export default store;