const TODO_KEY = "nomentum_todolist";

const todoDiv = document.querySelector(".todo");
const todoUl = todoDiv.querySelector("ul");
const todoForm = todoDiv.querySelector("form");

const printTodos = () => {
	const todoList = loadTodos();
	todoUl.innerHTML = "";
	todoList?.map((todo) => {
		const li = document.createElement("li");
		const button = document.createElement("button");
		li.id = todo.id;
		li.innerText = todo.content;
		button.innerText = "X";
		button.addEventListener("click", handleRemoveClick);
		li.appendChild(button);
		todoUl.appendChild(li);
	});
};

const loadTodos = () => {
	const currentTodos = JSON.parse(localStorage.getItem(TODO_KEY));
	if (currentTodos) {
		return currentTodos;
	} else {
		updateTodos([]);
		return [];
	}
};

const addTodos = (todo) => {
	const currentTodos = loadTodos();
	const newTodos = [
		...currentTodos,
		{ id: Date.now().toString(), content: todo },
	];
	updateTodos(newTodos);
};

const removeTodos = (id) => {
	const currentTodos = loadTodos();
	const newTodos = currentTodos.filter((todo) => todo.id !== id);
	updateTodos(newTodos);
};

const updateTodos = (todoList) => {
	localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
};

const handleTodoSubmit = (event) => {
	event.preventDefault();
	const input = todoForm.querySelector("input");
	addTodos(input.value);
	input.value = "";
	printTodos();
};

const handleRemoveClick = (event) => {
	const id = event.target.parentElement.id;
	removeTodos(id);
	printTodos();
};

todoForm.addEventListener("submit", handleTodoSubmit);
printTodos();
