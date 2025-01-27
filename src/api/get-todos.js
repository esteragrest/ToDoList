export const getToDos = () => {
	return fetch('http://localhost:3000/todos')
		.then((loadedData) => loadedData.json())
		.catch(() => {
			console.log('Ошибка загрузки дел');
		});
};
