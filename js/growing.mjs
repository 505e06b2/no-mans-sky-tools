"use strict";

//https://nomanssky.fandom.com/wiki/Farming
const crops = {
	"Venom Urchin":      {grow_time: 10/3, price: 60800, outdoors: null},
	"Gravitino Host":    {grow_time: 2,    price: 40024, outdoors: null},
	"NipNip":            {grow_time: 4,    price: 17776, outdoors: "Lush"},
	"Albumen Pearl Orb": {grow_time: 2,    price: 10640, outdoors: null},
	"Solar Vine":        {grow_time: 16,   price: 5460,  outdoors: "Scorched"},
	"Echinocactus":      {grow_time: 16,   price: 4368,  outdoors: "Baren"},
	"Mordite Root":      {grow_time: 8,    price: 1560,  outdoors: "?"},
	"Star Bramble":      {grow_time: 4,    price: 1248,  outdoors: "Lush"},
	"Fungal Cluster":    {grow_time: 4,    price: 1248,  outdoors: "Toxic"},
	"Gamma Weed":        {grow_time: 4,    price: 1248,  outdoors: "Irradiated"},
	"Gutrot Flower":     {grow_time: 4,    price: 1170,  outdoors: "?"},
	"Frostwort":         {grow_time: 1,    price: 936,   outdoors: "Frozen"},
};

const best_for_time = Object.keys(crops).sort((a, b) => {
	const a_value = crops[a];
	const b_value = crops[b];

	const a_price_per_time = a_value.price / a_value.grow_time;
	const b_price_per_time = b_value.price / b_value.grow_time;
	return b_price_per_time - a_price_per_time;
});

window.onload = () => {
	document.body.innerHTML += `Best price/time: <span class="highlight">${best_for_time[0]}</span><br>`;
	document.body.innerHTML += `Best price/time (can be outdoors): <span class="highlight">${best_for_time.filter(x => crops[x].outdoors)[0]}</span><br>`;
};
