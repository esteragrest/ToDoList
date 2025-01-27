import { removeToDo } from '../api';
import { ACTION_TYPE } from './action-type';

export const removeToDoAsync = (id) => (dispatch) => {
	return removeToDo(id).then(() => {
		dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: id });
	});
};
