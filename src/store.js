import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { toDoReducer, optionsReducer } from './reducers';

const reducer = combineReducers({
	toDoState: toDoReducer,
	optionsState: optionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
