import { useContext } from 'react';
import styles from './searchform.module.css';

export const SearchForm = () => {
	const { searchValue, setSearchValue } = useContext();

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
