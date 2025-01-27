export const initialStatusToDoState = {
	isLoading: false,
	isEditind: false,
	isDelete: false,
};

export const statusToDoReducer = (state = initialStatusToDoState, actions) => {
	switch (actions.type) {
		default:
			return state;
	}
};
