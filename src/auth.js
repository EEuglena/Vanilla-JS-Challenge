const AUTH_KEY = "nomentum_username";

const authForm = document.querySelector(".auth-form");

const welcomeUser = () => {
	const welcome = document.querySelector(".welcome");
	welcome.querySelector("h3").innerText = `Welcome, ${localStorage.getItem(
		AUTH_KEY
	)}`;
};

const checkAuth = () => {
	const username = localStorage.getItem(AUTH_KEY);
	if (username) {
		authForm.classList.add("hidden");
		welcomeUser();
	} else {
		authForm.classList.remove("hidden");
	}
};

const handleAuthSubmit = (event) => {
	event.preventDefault();
	const username = event.target[0].value;
	localStorage.setItem(AUTH_KEY, username);
	checkAuth();
};

checkAuth();
authForm.querySelector("form").addEventListener("submit", handleAuthSubmit);
