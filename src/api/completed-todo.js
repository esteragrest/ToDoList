export const comletedToDo = (todos, id) => {
	const todoToToggle = todos.find((todo) => todo.id === id);

	return fetch(`http://localhost:3000/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({ ...todoToToggle, completed: !todoToToggle.completed }),
	}).then((rawResponse) => rawResponse.json());
};
