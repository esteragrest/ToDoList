import styles from './todolist.module.css';
import { ToDo } from '../todo/ToDo';
import { useSelector } from 'react-redux';
import { selectToDos } from '../../selectors';

export const Todolist = () => {
	const todos = useSelector(selectToDos);
	// const { isSorted } = useContext();
	// const { searchValue } = useContext();

	// const sortedTodos = isSorted
	// 	? [...todos].sort((a, b) => a.title.localeCompare(b.title))
	// 	: todos;

	// const filteredTodos = sortedTodos.filter((todo) =>
	// 	todo.title.toLowerCase().includes(searchValue),
	// );
	return (
		<div className={styles.todos}>
			{todos.map(({ id, title, completed }) => {
				return (
					<div className={styles.todo} key={id}>
						<ToDo id={id} title={title} completed={completed} />
					</div>
				);
			})}
		</div>
	);
};
