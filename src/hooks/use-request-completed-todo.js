import { useState } from 'react';

export const useRequestCompletedTodo = (todos, refreshTodos) => {
	const [isUpdatingCompleted, setIsUpdatingCompleted] = useState(false);

	const requestCompletedTodo = (id) => {
		setIsUpdatingCompleted(true);
		const todoToToggle = todos.find((todo) => todo.id === id);

		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ ...todoToToggle, completed: !todoToToggle.completed }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело обновлено, ответ сервера: ', response);
				refreshTodos();
			})
			.finally(false);
	};

	return [requestCompletedTodo, isUpdatingCompleted];
};
