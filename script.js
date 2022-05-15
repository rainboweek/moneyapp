var reward = 10000
var yes = -2000
var hacker = 1000000
var money = 0
var cpc = 1
var res  = -1
window.onload = function() {
    document.getElementById('money').textContent = "Money: " + money + '$';
    document.getElementById('money').style.color = '#22f213'
}
function mone() {
    money += cpc;
    document.getElementById('money').innerHTML = "Money: " + money + '$';
}

function hack() {
    var sign = prompt("Wpisz kod dostępu: ");
if (sign.toLowerCase() == "rainboweek") {
alert("Poprawny kod");
   money += hacker;
   document.getElementById('money').innerHTML = "Money: " + money + '$'

}else {
alert('Niepoprawny kod')
    window.location.reload(true)
}
} 


function lvl(){
    if (money >= 2000) {
        document.location.href = './levels/1/lvl1.html';

    } else {
        document.getElementById('btnoxo').textContent = 'Idiot'
        setTimeout(1000)
        window.location.reload(true)
}
}
function discord() {
money += reward;
document.getElementById('money').innerHTML = "Money: " + money + '$'
}

