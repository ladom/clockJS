const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
var date = document.getElementById('date');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	var days = now.getDate();
	var months = now.getMonth();
	var year = now.getFullYear();
	const secondsDegrees = ((seconds / 60) * 360);
	const minutesDegrees = ((minutes / 60) * 360);
	const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * (360 / 12) - 360);

	
	var month = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
		
	

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	date.innerHTML = days + " " + month[months] + " " + year;


}

setInterval(setDate, 1000);

