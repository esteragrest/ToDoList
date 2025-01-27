import { ACTION_TYPE } from './action-type';

export const isSortedAction = (isSorted) => {
	return {
		type: ACTION_TYPE.SET_IS_SORTED,
		payload: isSorted === true ? false : true,
	};
};
