import styles from './todo.module.css';
import {
	useRequestEditingTodo,
	useRequestCompletedTodo,
	useRequestDeletetodo,
} from '../../hooks';
import { useContext, useState } from 'react';
import { TodosContext } from '../../context';
import PropTypes from 'prop-types';

export const ToDo = ({ id, title, completed }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const { todos, refreshTodos } = useContext(TodosContext);

	const [requestEditTodo, isUpdatingTitle] = useRequestEditingTodo(refreshTodos);
	const [requestCompletedTodo, isUpdatingCompleted] = useRequestCompletedTodo(
		todos,
		refreshTodos,
	);
	const [requestDeleteTodo, isDelete] = useRequestDeletetodo(refreshTodos);

	const onChangeTitle = (event) => {
		event.preventDefault();
		if (newTitle) {
			requestEditTodo(id, { title: newTitle, completed: false });
			setIsEditing(false);
		}
	};

	return (
		<div className={styles.todo}>
			{isEditing ? (
				<form onSubmit={onChangeTitle} className={styles.editForm}>
					<input
						type="text"
						name="todo"
						id="todo"
						value={newTitle}
						placeholder="Введите новое название"
						onChange={({ target }) => setNewTitle(target.value)}
					></input>
					<button>Сохранить</button>
				</form>
			) : (
				<p
					style={{
						textDecoration: completed ? 'line-through' : 'none',
					}}
				>
					{title}
				</p>
			)}

			<div className={styles.buttons}>
				<button
					onClick={() => requestCompletedTodo(id)}
					disabled={isUpdatingCompleted}
				>
					<img src="../../../img/completed-icon.png" />
				</button>
				<button onClick={() => setIsEditing(true)} disabled={isUpdatingTitle}>
					<img src="../../../img/edit-icon.png" />
				</button>
				<button onClick={() => requestDeleteTodo(id)} disabled={isDelete}>
					<img src="../../../img/delete-icon.png" />
				</button>
			</div>
		</div>
	);
};

ToDo.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	completed: PropTypes.bool,
};
