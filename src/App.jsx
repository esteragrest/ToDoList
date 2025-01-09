import styles from './app.module.css';
import { useRequestGetTodos } from './hooks';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToDoList } from './components/todolist/ToDoList';
import { ToDoTask } from './components/todotask/ToDoTask';
import { NotFound } from './components/notfound/NotFound';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const [todos, isLoading] = useRequestGetTodos(refreshTodosFlag);

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
								<ToDoList todos={todos} refreshTodos={refreshTodos} />
							}
						/>
						<Route
							path="/task/:id"
							element={
								<ToDoTask todos={todos} refreshTodos={refreshTodos} />
							}
						/>
						<Route path="/404" element={<NotFound />} />
						<Route path="*" element={<Navigate to="/404" />} />
					</Routes>
				)}
			</div>
		</div>
	);
};
