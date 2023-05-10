const { configureStore, combineReducers } = require('@reduxjs/toolkit');
import savedTodosReducer from './savedTodosSlice';
import todayTodosReducer from './todayTodosSlice';

const reducer = combineReducers({ todayTodos: todayTodosReducer, savedTodos: savedTodosReducer });

const store = configureStore({ reducer });

export default store;
