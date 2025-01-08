import {
	useRequestGetTodos,
	useRequestAddNewTodo,
	useRequestEditingTodo,
	useRequestDeletetodo,
	useRequestCompletedTodo,
} from '../../hooks';
import styles from './todolist.module.css';
import { useState } from 'react';
import { ToDos } from '../todos/Todos';
import { Todoform } from '../todoform/Todoform';
import { SearchForm } from '../searchform/Searchform';

export const ToDoList = () => {
	const [todoValue, setTodoValue] = useState('');
	const [editingTodoId, setEditingTodoId] = useState(null);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [isSorted, setIsSorted] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const toggleSorted = () => {
		setIsSorted(!isSorted);
	};

	const [todos, isLoading] = useRequestGetTodos(refreshTodosFlag);
	const [requestAddNewTodo, isCreating] = useRequestAddNewTodo(refreshTodos);
	const [requestEditTodo, isUpdatingTitle] = useRequestEditingTodo(
		refreshTodos,
		setEditingTodoId,
	);
	const [requestDeleteTodo, isDelete] = useRequestDeletetodo(refreshTodos);
	const [requestCompletedTodo, isUpdatingCompleted] = useRequestCompletedTodo(
		todos,
		refreshTodos,
		setEditingTodoId,
	);

	const handleEditTodo = (id) => {
		const todoToEdit = todos.find((todo) => todo.id === id);
		setTodoValue(todoToEdit.title);
		setEditingTodoId(id);
	};

	const sortedTodos = isSorted
		? [...todos].sort((a, b) => a.title.localeCompare(b.title))
		: todos;

	const filteredTodos = sortedTodos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue),
	);
	return (
		<div className={styles.app}>
			<div className={styles['to-do-list-container']}>
				{isLoading ? (
					<div className="loader">Loading...</div>
				) : (
					<>
						<Todoform
							value={todoValue}
							onChange={setTodoValue}
							requestAddNewTodo={requestAddNewTodo}
							isSorted={isSorted}
							toggleSorted={toggleSorted}
							isCreating={isCreating}
						/>
						<SearchForm value={searchValue} setSearchValue={setSearchValue} />
						<ToDos todos={filteredTodos} />
					</>
				)}
			</div>
		</div>
	);
};
