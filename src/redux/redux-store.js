import { createStore, combineReducers } from "redux";
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";

let reducers = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce
});

let store = createStore(reducers);

export default store;