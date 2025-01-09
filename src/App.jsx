import styles from './app.module.css';
import { useRequestGetTodos, useRequestAddNewTodo } from './hooks';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToDoList } from './components/todolist/ToDoList';
import { ToDoTask } from './components/todotask/ToDoTask';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const [todos, isLoading] = useRequestGetTodos(refreshTodosFlag);
	const [requestAddNewTodo, isCreating] = useRequestAddNewTodo(refreshTodos);

	return (
		<div className={styles.app}>
			<div className={styles['to-do-list-container']}>
				{isLoading ? (
					<div className="loader">Loading...</div>
				) : (
					<Routes>
						<Route
							path="/"
							element={
								<ToDoList
									todos={todos}
									requestAddNewTodo={requestAddNewTodo}
									isCreating={isCreating}
								/>
							}
						/>
						<Route
							path="/task/:id"
							element={
								<ToDoTask todos={todos} refreshTodos={refreshTodos} />
							}
						/>
					</Routes>
				)}
			</div>
		</div>
	);
};
