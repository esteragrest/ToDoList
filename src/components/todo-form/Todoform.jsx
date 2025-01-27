import { useDispatch } from 'react-redux';
import styles from './todoform.module.css';
import { useState } from 'react';
import { addToDoAsync } from '../../actions';

export const Todoform = () => {
	const [todoValue, setTodoValue] = useState('');
	// const { isSorted, setIsSorted } = useContext();
	const dispatch = useDispatch();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		if (todoValue) {
			dispatch(addToDoAsync({ title: todoValue, completed: false }));
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
					<button
						className={styles.newtodo}
						// disabled={isCreating}
					>
						Записать
					</button>
					<button
					// className={isSorted ? styles.sortButtonOff : styles.sortButtonOn}
					// onClick={() => setIsSorted(!isSorted)}
					>
						Дела по алфавиту
					</button>
				</div>
			</form>
		</>
	);
};
