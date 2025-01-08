import { Routes, Route } from 'react-router-dom';
import { ToDoList } from './components/todolist/ToDoList';
import { ToDoTask } from './components/todotask/ToDoTask';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<ToDoList />} />
			<Route path="/task/:id" element={<ToDoTask />} />
		</Routes>
	);
};
