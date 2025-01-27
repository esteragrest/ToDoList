import styles from './todolist.module.css';
import { ToDo } from '../../components';
import { useSelector } from 'react-redux';
import { selectIsSorted, selectToDos } from '../../selectors';
import { selectSearchValue } from '../../selectors/select-search-value';

export const Todolist = () => {
	const todos = useSelector(selectToDos);
	const isSorted = useSelector(selectIsSorted);
	const searchValue = useSelector(selectSearchValue);

	const sortedTodos = isSorted
		? [...todos].sort((a, b) => a.title.localeCompare(b.title))
		: todos;

	const filteredTodos = searchValue
		? sortedTodos.filter((todo) => todo.title.toLowerCase().includes(searchValue))
		: sortedTodos;
	return (
		<div className={styles.todos}>
			{filteredTodos.map(({ id, title, completed }) => {
				return (
					<div className={styles.todo} key={id}>
						<ToDo id={id} title={title} completed={completed} />
					</div>
				);
			})}
		</div>
	);
};
