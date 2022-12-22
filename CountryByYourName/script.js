let inCon = document.getElementById("userText");
let output = document.querySelector("#output");
let i = -1;

const country = [
	["Australia", "America"],
	["Bulgaria", "Bangkok"],
	["Canada", "China"],
	["Denmark", "Dubai"],
	["England", "Egypt"],
	["Fiji", "France"],
	["Greece", "Germany"],
	["Hungary", "Haiti"],
	["India"],
	["Japan", "Jamaica"],
	["Kenya", "Kuwait"],
	["Latvia", "Lithuania"],
	["Madagascar", "Malaysia"],
	["Nepal", "Norway"],
	["Oman"],
	["Peru", "Poland"],
	["Qatar"],
	["Russia", "Romania"],
	["Singapore", "Samoa"],
	["Thailand", "Tunisia"],
	["Uganda", "Ukraine"],
	["Vietnam"],
	["Wakanda"],
	["X007"],
	["Yemen"],
	["Zambia", "Zimbabwe"],
];

// Need to upadate a random int generate to produce different country name.
//Coming soon in new update

function populate(char) {
	let alpha = char.charCodeAt() - 65;
	console.log(alpha);

	i += 1;
	let box = document.createElement("div");
	box.classList.add("box");
	box.setAttribute("id", "box_${i}");
	box.innerText = country[alpha][0];

	output.appendChild(box);
}

function fetchDetail(string) {
	output.classList.remove("hide");
	output.classList.add("outShow");
	output.classList.add("center");

	let strArr = Array.from(string);
	strArr.forEach((char) => {
		populate(char);
	});
}

inCon.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		inCon.classList.remove("center");
		inCon.classList.add("Animatetop");
		inCon.readOnly = true;

		let string = inCon.value;
		fetchDetail(string.toUpperCase());
	}
});
