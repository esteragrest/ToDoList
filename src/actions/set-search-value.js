import { ACTION_TYPE } from './action-type';

export const searchValueAction = (value) => {
	return {
		type: ACTION_TYPE.SET_SEARCH_VALUE,
		payload: value,
	};
};
