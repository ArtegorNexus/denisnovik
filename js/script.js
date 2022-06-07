"use strict"

let burger = document.querySelector('.burger');
let header = document.querySelector('.menu-header');

burger.addEventListener('click', function(event){
	console.log(burger);
	burger.classList.toggle('active');
	header.classList.toggle('active');
	document.body.classList.toggle('_ovhid');
});
