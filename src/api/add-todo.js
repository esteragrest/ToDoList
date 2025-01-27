export const addToDo = (newTodo) => {
	return fetch('http://localhost:3000/todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(newTodo),
	}).then((rawResponse) => rawResponse.json());
};
