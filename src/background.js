const NUMBER_OF_IMAGES = 5;

const background = document.querySelector(".background img");

const loadBackground = () => {
	const option = Math.floor(Math.random() * NUMBER_OF_IMAGES);
	const path = `./src/images/${option}.jpg`;
	background["src"] = path;
};

loadBackground();
