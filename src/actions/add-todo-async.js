import { addToDo } from '../api';
import { ACTION_TYPE } from './action-type';

export const addToDoAsync = (newToDo) => (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });

	return addToDo(newToDo)
		.then((todo) => {
			dispatch({ type: ACTION_TYPE.ADD_TODO, payload: todo });
		})
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }));
};
