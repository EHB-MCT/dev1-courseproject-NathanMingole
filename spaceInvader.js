"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

spaceinvader();

function spaceinvader() {
	context.beginPath();
	context.fillStyle = "black";
	context.rect(50, 50, 300, 300);
	context.fill();

	context.beginPath();
	context.fillStyle = "#83f52c";
	context.rect(75, 75, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#83f52c";
	context.rect(175, 75, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#83f52c";
	context.rect(275, 75, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#83f52c";
	context.rect(125, 275, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#83f52c";
	context.rect(175, 225, 50, 50);
	context.fill();

	context.beginPath();
	context.fillStyle = "#83f52c";
	context.rect(22 5, 275, 50, 50);
	context.fill();
}
