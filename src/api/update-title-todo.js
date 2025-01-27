export const updateTitleTodo = (id, updatingTodo) => {
	return fetch(`http://localhost:3000/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(updatingTodo),
	}).then((rawResponse) => rawResponse.json());
};
