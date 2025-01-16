import { useRequestGetTodos } from './hooks';
import styles from './app.module.css';
import { useState } from 'react';
import { Todolist } from './components/todos/Todolist';
import { Todoform } from './components/todoform/Todoform';
import { SearchForm } from './components/searchform/Searchform';
import { TodosContext, SortedTodosContext, FilteredTodosContext } from './context';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const [isSorted, setIsSorted] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

	const [todos, isLoading] = useRequestGetTodos(refreshTodosFlag);

	return (
		<div className={styles.app}>
			<div className={styles['to-do-list-container']}>
				{isLoading ? (
					<div className="loader">Loading...</div>
				) : (
					<TodosContext.Provider value={{ todos, refreshTodos }}>
						<SortedTodosContext.Provider value={{ isSorted, setIsSorted }}>
							<FilteredTodosContext.Provider
								value={{ searchValue, setSearchValue }}
							>
								<Todoform />
								<SearchForm />
								<Todolist />
							</FilteredTodosContext.Provider>
						</SortedTodosContext.Provider>
					</TodosContext.Provider>
				)}
			</div>
		</div>
	);
};
