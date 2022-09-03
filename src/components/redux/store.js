import { createStore, combineReducers } from 'redux';
import reducer from './users/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ users: reducer });

const store = createStore(rootReducer, composeWithDevTools());
export default store;
