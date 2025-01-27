import { getToDos } from '../api';
import { ACTION_TYPE } from './action-type';

export const readToDos = (dispatch) => {
	return getToDos().then((loadedToDos) => {
		dispatch({ type: ACTION_TYPE.SET_TODOS, payload: loadedToDos });
	});
};
