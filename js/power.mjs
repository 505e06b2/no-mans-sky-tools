"use strict";

const night_time_s = 900;
const battery_capacity_kp = 45000;
const solar_panel_max_output_kps = 50;

window.onload = async () => {
	const panels_elem = document.querySelector('#panels');
	const batteries_elem = document.querySelector('#batteries');

	document.querySelector('#usage').oninput = (e) => {
		let power_usage = parseInt(e.target.value);
		if(isNaN(power_usage)) power_usage = 0;

		const required_batteries = Math.ceil(night_time_s * power_usage / battery_capacity_kp);
		const required_solar_panels = Math.ceil(power_usage / solar_panel_max_output_kps * 2);

		panels_elem.innerText = `${required_solar_panels} (${required_solar_panels * solar_panel_max_output_kps}kPs)`;
		batteries_elem.innerText = `${required_batteries} (${required_batteries * battery_capacity_kp}kP)`;
	};
};
