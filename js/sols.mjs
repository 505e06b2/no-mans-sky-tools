"use strict";

const sol_ms = 15 * 60 * 1000;
const sols_for_survivalist = 32;

function msToMMSS(ms) {
	const seconds = ms / 1000;
	const mm = Math.floor(seconds / 60).toString().padStart(2,'0');
	const ss = Math.floor(seconds % 60).toString().padStart(2,'0');

	return `${mm}:${ss}`;
}

window.onload = async () => {
	const sols_complete_elem = document.querySelector('#sols');
	const sols_left_elem = document.querySelector('#sols_left');
	const time_left_elem = document.querySelector('#left');
	const expected_completion_elem = document.querySelector('#expected');

	let time_left_ms = 0;
	let start_time = Date.now();

	setInterval(() => {
		const delta = Date.now() - start_time;
		let left = time_left_ms - delta;
		if(left < 0) left = 0;
		time_left_elem.innerText = msToMMSS(left);
	}, 500);

	const updateTimeLeft = () => {
		let sols_complete = parseFloat(sols_complete_elem.value);
		if(isNaN(sols_complete)) sols_complete = 0;

		const sols_left = sols_for_survivalist - sols_complete;
		sols_left_elem.innerText = sols_left.toFixed(1);

		time_left_ms = sols_left * sol_ms;
		start_time = Date.now();

		expected_completion_elem.innerText = new Date(Date.now() + time_left_ms);
	};

	sols_complete_elem.oninput = updateTimeLeft;
	updateTimeLeft();
};
