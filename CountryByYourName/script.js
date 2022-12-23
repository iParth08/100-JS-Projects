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
	box.innerHTML = `<h2>${char}</h2>` + country[alpha][0];
	box.style.border = `4px solid ${colors[alpha]}`;

	output.appendChild(box);
}

function fetchDetail(string) {
	output.classList.remove("hide");
	output.classList.add("outShow");
	output.classList.add("center");

	let count = 0;

	let strArr = Array.from(string);
	let done = setInterval(() => {
		if (count == strArr.length) clearInterval(done);

		if (strArr[count] != " ") {
			populate(strArr[count]);
		}
		count += 1;
	}, 700);
}

inCon.addEventListener("keyup", (event) => {
	if (event.key === "Enter") {
		inCon.classList.remove("center");
		inCon.classList.add("Animatetop");
		inCon.readOnly = true;
		let string = inCon.value;
		inCon.style.textShadow = "2px 2px 1px #333333, 4px 4px 3px #3366E6";

		fetchDetail(string.toUpperCase());
	}
});

// just a trick to give various bgcolors
const colors = [
	"#FF6633",
	"#FFFF99",
	"#3366E6",
	"#999966",
	"#99FF99",
	"#B34D4D",
	"#809900",
	"#E6B3B3",
	"#6680B3",
	"#66991A",
	"#FF99E6",
	"#33FFCC",
	"#4D8000",
	"#B33300",
	"#CC80CC",
	"#66664D",
	"#991AFF",
	"#4DB3FF",
	"#CC9999",
	"#B3B31A",
	"#00E680",
	"#4D8066",
	"#E6FF80",
	"#1AFF33",
	"#999933",
	"#FF3380",
];
