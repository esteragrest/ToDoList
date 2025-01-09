import { useState } from 'react';
import { ToDos } from '../todos/Todos';
import { Todoform } from '../todoform/Todoform';
import { SearchForm } from '../searchform/Searchform';
import PropTypes from 'prop-types';

export const ToDoList = ({ todos, requestAddNewTodo, isCreating }) => {
	const [todoValue, setTodoValue] = useState('');
	const [isSorted, setIsSorted] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const toggleSorted = () => {
		setIsSorted(!isSorted);
	};

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
	requestAddNewTodo: PropTypes.func,
	isCreating: PropTypes.bool,
};
