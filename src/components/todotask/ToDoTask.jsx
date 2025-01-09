import styles from './todotask.module.css';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import {
	useRequestCompletedTodo,
	useRequestDeletetodo,
	useRequestEditingTodo,
} from '../../hooks';
import { useState } from 'react';
import { ToDoTaskButtons } from '../todotaskbuttons/ToDoTaskButtons';

export const ToDoTask = ({ todos, refreshTodos }) => {
	const { id } = useParams();
	const todo = todos.find((todo) => todo.id === id);
	const navigate = useNavigate();
	const [newTitle, setNewTitle] = useState(todo.title);
	const [editing, setEditing] = useState(false);

	const [requestCompletedTodo, isUpdatingCompleted] = useRequestCompletedTodo(
		todos,
		refreshTodos,
	);
	const [requestDeleteTodo, isDelete] = useRequestDeletetodo(refreshTodos);

	const [requestEditTodo, isUpdatingTitle] = useRequestEditingTodo(refreshTodos);

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (newTitle) {
			requestEditTodo(id, { title: newTitle, completed: false });
		}
	};
	return (
		<div className={styles.taskContainer}>
			<button onClick={() => navigate(-1)} className={styles.back}>
				<img src="../../../img/back-icon.png" alt="back button" />
			</button>
			<div className={styles.taskInfo}>
				<h2>{todo.title}</h2>
				<p>Статус: {todo.completed ? 'Выполнено' : 'Не выполнено'}</p>
				{editing && (
					<div className={styles.editForm}>
						<form onSubmit={handleOnSubmit}>
							<input
								type="text"
								value={newTitle}
								onChange={(e) => setNewTitle(e.target.value)}
								placeholder="Новый текст задачи"
							/>
							<button disabled={isUpdatingTitle}>Сохранить</button>{' '}
						</form>
					</div>
				)}
			</div>
			<ToDoTaskButtons
				todo={todo}
				onEdit={() => setEditing(!editing)}
				onDelete={() => requestDeleteTodo(id)}
				onComplete={() => requestCompletedTodo(id)}
				isUpdatingCompleted={isUpdatingCompleted}
				isDeleting={isDelete}
			/>
		</div>
	);
};

ToDoTask.propTypes = {
	todos: PropTypes.array,
	refreshTodos: PropTypes.func,
};
