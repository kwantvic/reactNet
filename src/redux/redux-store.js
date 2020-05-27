import { createStore, combineReducers } from "redux";
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";
import usersReduce from "./users-reduce";

let reducers = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    usersPage: usersReduce
});

let store = createStore(reducers);

window.store = store;

export default store;