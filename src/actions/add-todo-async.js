import { addToDo } from '../api';
import { ACTION_TYPE } from './action-type';

export const addToDoAsync = (newToDo) => (dispatch) => {
	return addToDo(newToDo).then((todo) => {
		dispatch({ type: ACTION_TYPE.ADD_TODO, payload: todo });
	});
};
