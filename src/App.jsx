import styles from './app.module.css';
import { useEffect } from 'react';
import { Todolist, Todoform, SearchForm } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { readToDos } from './actions';
import { selectIsLoading } from './selectors';

export const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);

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
						<SearchForm />
						<Todolist />
					</>
				)}
			</div>
		</div>
	);
};
