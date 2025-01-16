import styles from './todoform.module.css';
import { useContext, useState } from 'react';
import { useRequestAddNewTodo } from '../../hooks';
import { SortedTodosContext, TodosContext } from '../../context';

export const Todoform = () => {
	const [todoValue, setTodoValue] = useState('');
	const { refreshTodos } = useContext(TodosContext);
	const { isSorted, setIsSorted } = useContext(SortedTodosContext);

	const [requestAddNewTodo, isCreating] = useRequestAddNewTodo(refreshTodos);

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (todoValue) {
			requestAddNewTodo({ title: todoValue, completed: false });
			setTodoValue('');
		}
	};

	return (
		<>
			<h1>TO DO LIST</h1>
			<form className={styles.form} onSubmit={handleOnSubmit}>
				<input
					type="text"
					name="todo"
					id="todo"
					value={todoValue}
					onChange={({ target }) => setTodoValue(target.value)}
					placeholder="Заполнить список дел..."
				/>
				<div className={styles.buttonContainer}>
					<button className={styles.newtodo} disabled={isCreating}>
						Записать
					</button>
					<button
						className={isSorted ? styles.sortButtonOff : styles.sortButtonOn}
						onClick={() => setIsSorted(!isSorted)}
					>
						Дела по алфавиту
					</button>
				</div>
			</form>
		</>
	);
};
