import { updateTitleTodo } from '../api';
import { ACTION_TYPE } from './action-type';

export const updateTitleToDoAsync = (id, updatingTodo) => (dispatch) => {
	return updateTitleTodo(id, updatingTodo).then(
		dispatch({
			type: ACTION_TYPE.UPDATE_TITLE_TODO,
			payload: { id, updatingTodo },
		}),
	);
};
