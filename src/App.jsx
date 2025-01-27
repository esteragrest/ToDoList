import styles from './app.module.css';
import { useEffect } from 'react';
import { Todolist } from './components/todos/Todolist';
import { Todoform } from './components/todo-form/Todoform';
// import { SearchForm } from './components/search-form/Searchform';
import { useDispatch } from 'react-redux';
import { readToDos } from './actions';

export const App = () => {
	// const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
	const dispatch = useDispatch();
	// const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
	const isLoading = false;

	useEffect(() => {
		dispatch(readToDos);
	}, []);

	return (
		<div className={styles.app}>
			<div className={styles['to-do-list-container']}>
				{isLoading ? (
					<div className="loader">Loading...</div>
				) : (
					<>
						<Todoform />
						{/* <SearchForm /> */}
						<Todolist />
					</>
				)}
			</div>
		</div>
	);
};
