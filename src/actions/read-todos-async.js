import { getToDos } from '../api';
import { ACTION_TYPE } from './action-type';

export const readToDos = (dispatch) => {
	dispatch({ type: ACTION_TYPE.LOADING_START });
	return getToDos()
		.then((loadedToDos) => {
			dispatch({ type: ACTION_TYPE.SET_TODOS, payload: loadedToDos });
		})
		.finally(() => dispatch({ type: ACTION_TYPE.LOADING_END }));
};
