import { useDispatch, useSelector } from 'react-redux';
import styles from './searchform.module.css';
import { selectSearchValue } from '../../selectors/select-search-value';
import { searchValueAction } from '../../actions';

export const SearchForm = () => {
	const searchValue = useSelector(selectSearchValue);
	const dispatch = useDispatch();

	const setSearchValue = (value) => {
		dispatch(searchValueAction(value));
	};

	return (
		<>
			<form
				className={styles.form}
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<input
					type="text"
					name="searchtodos"
					id="searchtodos"
					value={searchValue}
					onChange={({ target }) => setSearchValue(target.value)}
					placeholder="Дело, которое нужно найти..."
				/>
			</form>
		</>
	);
};
