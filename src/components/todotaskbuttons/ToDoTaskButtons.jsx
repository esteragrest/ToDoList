import PropTypes from 'prop-types';
import styles from './todotaskbuttons.module.css';

export const ToDoTaskButtons = ({
	todo,
	onEdit,
	onDelete,
	onComplete,
	isUpdatingCompleted,
	isDeleting,
}) => (
	<div className={styles.buttons}>
		<button
			onClick={onComplete}
			disabled={isUpdatingCompleted}
			className={styles.completed}
		>
			{todo.completed ? 'Выполнено' : 'Не выполнено'}
		</button>
		<button onClick={onEdit} className={styles.edit}>
			Редактировать
		</button>
		<button onClick={onDelete} disabled={isDeleting} className={styles.delete}>
			Удалить
		</button>
	</div>
);

ToDoTaskButtons.propTypes = {
	todo: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
	onComplete: PropTypes.func,
	isUpdatingCompleted: PropTypes.bool,
	isDeleting: PropTypes.bool,
};
