const clock = document.querySelector(".clock h1");

const setClock = () => {
	const now = new Date();
	const time = `${now.getHours().toString().padStart(2, "0")}:${now
		.getMinutes()
		.toString()
		.padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;
	clock.innerText = time;
};

setClock();
setInterval(setClock, 1000);
