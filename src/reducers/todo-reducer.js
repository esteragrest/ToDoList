import { ACTION_TYPE } from '../actions';

export const initialToDoState = [];

export const toDoReducer = (state = initialToDoState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_TODOS:
			return action.payload;
		case ACTION_TYPE.ADD_TODO:
			return [...state, action.payload];
		case ACTION_TYPE.REMOVE_TODO:
			return state.filter((todo) => todo.id !== action.payload);
		case ACTION_TYPE.UPDATE_TITLE_TODO:
			return state.map((todo) =>
				todo.id == action.payload.id
					? { ...todo, ...action.payload.updatingTodo }
					: todo,
			);
		case ACTION_TYPE.COMPLETED_TODO:
			return state.map((todo) =>
				todo.id == action.payload.id ? action.payload : todo,
			);
		default:
			return state;
	}
};
