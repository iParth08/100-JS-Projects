const state = document.querySelector(".bar"); // red or green
const qno = document.querySelector("#count"); // qno number
const quest = document.querySelector("#question"); //send question directly
const opt1 = document.querySelector("#opt1"); //opt1
const opt2 = document.querySelector("#opt2"); //opt2
const opt3 = document.querySelector("#opt3"); //opt3
const opt4 = document.querySelector("#opt4"); //opt4

let index = -1;

function populate() {
	index += 1;
	if (index <= 13) {
		qno.innerText = `Qno. ${index + 1}`;
		quest.innerText = questions[index][0];
		opt1.innerText = questions[index][1];
		opt2.innerText = questions[index][2];
		opt3.innerText = questions[index][3];
		opt4.innerText = questions[index][4];
	} else {
		gameOver();
	}
}

//promise
function styleFunc() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("animation Complete");
		}, 1000);
	});
}

let score = 0;
async function checkCorrect(event) {
	let answer = questions[index][5]; //answer of current indexed question
	let selected = event.target.innerText;

	if (selected === answer) {
		//debug::
		//Note:: customized func for animation
		let targetID = event.target.id;
		let elm = document.getElementById(targetID);
		elm.classList.add("correct");

		await styleFunc();
		elm.classList.remove("correct");

		//state bar
		state.innerHTML += `<div class="state plus"></div>`;
		populate();
		score += 10;
	} else {
		let targetID = event.target.id;
		let elm = document.getElementById(targetID);
		elm.classList.add("incorrect");

		await styleFunc();
		elm.classList.remove("incorrect");
		//state bar

		state.innerHTML += `<div class="state minus"></div>`;
		score += 0;
		populate();
	}

	if (index == 14) {
		gameOver();
	}
}

function gameOver() {
	let percent = (score * 100) / 140;
	qno.innerHTML = `<h2 class="scored">Scored : ${percent.toFixed(2)}%</h2>`;
}
(function () {
	// console.log(questions[0]);
	populate();
	//Note:: option click event triggered from HTML midgard
})();

//Alert:: How to import JS
