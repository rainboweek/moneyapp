var reward = 10000
var yes = -2000
var hacker = 1000000
var money = 0
var cpc = 1
var res  = -1


function auto() {
    if (money >= 1000) {
    money += cpc;
    document.getElementById('money').innerHTML = "Money: " + money + '$';
    setInterval(auto, 1000)
}else{
    alert('no')
    window.location.reload(true)
}}
function lvl(){
    if (money >= 10000) {
        document.location.href = './levels/1/lvl1.html';

    } else {
        document.getElementById('btnoxo').textContent = 'Idiot'
        setTimeout(1000)
        window.location.reload(true)
}
}
function mone() {
    money += cpc;
    document.getElementById('money').innerHTML = "Money: " + money + '$';
}
window.onload = function() {
    document.getElementById('money').textContent = "Money: " + money + '$';
    document.getElementById('money').style.color = '#22f213'
}