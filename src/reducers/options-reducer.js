import { ACTION_TYPE } from '../actions';

export const initialOptionsState = {
	isLoading: false,
	isSorted: false,
	searchValue: '',
};

export const optionsReducer = (state = initialOptionsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOADING_START:
			return { ...state, isLoading: true };
		case ACTION_TYPE.LOADING_END:
			return { ...state, isLoading: false };
		case ACTION_TYPE.SET_IS_SORTED:
			return { ...state, isSorted: action.payload };
		case ACTION_TYPE.SET_SEARCH_VALUE:
			return { ...state, searchValue: action.payload };
		default:
			return state;
	}
};
