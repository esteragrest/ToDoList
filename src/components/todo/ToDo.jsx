import styles from './todo.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectToDos } from '../../selectors';
import { updateTitleToDoAsync, removeToDoAsync, completedToDoAsync } from '../../actions';

export const ToDo = ({ id, title, completed }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const todos = useSelector(selectToDos);
	const dispatch = useDispatch();

	const onChangeTitle = (event) => {
		event.preventDefault();
		if (newTitle) {
			dispatch(updateTitleToDoAsync(id, { title: newTitle, completed: false }));
			setIsEditing(false);
		}
	};

	const deleteToDo = (id) => {
		dispatch(removeToDoAsync(id));
	};

	const completedToDo = (todos, id) => {
		dispatch(completedToDoAsync(todos, id));
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
				<button onClick={() => completedToDo(todos, id)}>
					<img src="../../../img/completed-icon.png" />
				</button>
				<button onClick={() => setIsEditing(true)}>
					<img src="../../../img/edit-icon.png" />
				</button>
				<button onClick={() => deleteToDo(id)}>
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
