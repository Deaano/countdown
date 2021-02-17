var countDownDate = new Date("oct 09, 2021");

var x = setInterval(function(){

var now = new Date();

var difference = countDownDate - now;

var days = Math.floor(difference / (1000*60*60*24));
var hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
var mins = Math.floor((difference % (1000*60*60)) / (1000*60));
var secs = Math.floor((difference % (1000*60)) / (1000));

document.getElementById('days').innerHTML = days;
document.getElementById('hours').innerHTML = hours;
document.getElementById('mins').innerHTML = mins;
document.getElementById('secs').innerHTML = secs;

console.log(days,hours,mins,secs);

if(secs < 10){
  document.getElementById('secs').innerHTML = "0" + secs;
}
if (mins < 10){
  document.getElementById('mins').innerHTML = "0" + mins;
}
if (hours < 10){
  document.getElementById('hours').innerHTML= "0" + hours;
}
if (days < 10) {
  document.getElementById('days').innerHTML = "0" + days;
}


},1000);
