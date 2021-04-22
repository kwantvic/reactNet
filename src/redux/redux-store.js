import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";
import usersReduce from "./users-reduce";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReduce,
    dialogsPage: dialogsReduce,
    usersPage: usersReduce,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store;