import styles from './todos.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const ToDos = ({ todos }) => {
    return (
        <div className={styles.todos}>
            {todos.map(({ id, title, completed }) => (
                <div className={styles.todo} key={id}>
                    <NavLink
                        to={`/task/${id}`}
                        className={styles.title}
                        style={{
                            textDecoration: completed ? 'line-through' : 'none',
                        }}
                    >
                        {title}
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

ToDos.propTypes = {
    todos: PropTypes.array,
};
