import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";
import usersReduce from "./users-reduce";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    usersPage: usersReduce,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;