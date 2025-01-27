export const removeToDo = (id) => {
	return fetch(`http://localhost:3000/todos/${id}`, {
		method: 'DELETE',
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('Дело удалено, ответ сервера: ', response);
		});
};
