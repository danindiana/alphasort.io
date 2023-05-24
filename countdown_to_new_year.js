// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2025 00:00:00").getTime();

// Get today's date and time
var now = new Date().getTime();
  
// Find the distance between now and the count down date
var distance = countDownDate - now;
  
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
