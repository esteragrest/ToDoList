export const initialToDoState = [];

export const toDoReducer = (state = initialToDoState, action) => {
	switch (action.type) {
		case 'SET_TODOS':
			return action.payload;
		case 'ADD_TODO':
			return [...state, action.payload];
		case 'REMOVE_TODO':
			return state.filter((todo) => todo.id !== action.payload);
		case 'UPDATE_TITLE_TODO':
			return state.map((todo) =>
				todo.id == action.payload.id
					? { ...todo, ...action.payload.updatingTodo }
					: todo,
			);
		case 'COMPLETED_TODO':
			return state.map((todo) =>
				todo.id == action.payload.id ? action.payload : todo,
			);
		default:
			return state;
	}
};
