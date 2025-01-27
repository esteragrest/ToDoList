import { comletedToDo } from '../api/completed-todo';
import { ACTION_TYPE } from './action-type';

export const completedToDoAsync = (todos, id) => (dispatch) => {
	return comletedToDo(todos, id).then((todo) => {
		dispatch({ type: ACTION_TYPE.COMPLETED_TODO, payload: todo });
	});
};
