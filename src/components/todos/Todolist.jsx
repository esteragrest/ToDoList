import styles from './todolist.module.css';
import { ToDo } from '../todo/ToDo';
import { useContext } from 'react';
import { FilteredTodosContext, SortedTodosContext, TodosContext } from '../../context';

export const Todolist = () => {
	const { todos } = useContext(TodosContext);
	const { isSorted } = useContext(SortedTodosContext);
	const { searchValue } = useContext(FilteredTodosContext);

	const sortedTodos = isSorted
		? [...todos].sort((a, b) => a.title.localeCompare(b.title))
		: todos;

	const filteredTodos = sortedTodos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue),
	);
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
