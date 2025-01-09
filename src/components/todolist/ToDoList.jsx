import { useState } from 'react';
import { useRequestAddNewTodo } from '../../hooks';
import { ToDos } from '../todos/Todos';
import { Todoform } from '../todoform/Todoform';
import { SearchForm } from '../searchform/Searchform';
import PropTypes from 'prop-types';

export const ToDoList = ({ todos, refreshTodos }) => {
	const [todoValue, setTodoValue] = useState('');
	const [isSorted, setIsSorted] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const toggleSorted = () => {
		setIsSorted(!isSorted);
	};

	const [requestAddNewTodo, isCreating] = useRequestAddNewTodo(refreshTodos);

	const sortedTodos = isSorted
		? [...todos].sort((a, b) => a.title.localeCompare(b.title))
		: todos;

	const filteredTodos = sortedTodos.filter((todo) =>
		todo.title.toLowerCase().includes(searchValue),
	);
	return (
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
	);
};

ToDoList.propTypes = {
	todos: PropTypes.array,
	refreshTodos: PropTypes.func,
};
