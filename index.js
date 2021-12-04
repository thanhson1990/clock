var sec = 0;
var hour = 0;
var minute = 0;
var press = document.getElementById("press");
var h = document.getElementById("hour");
var m = document.getElementById("minutes");
var s = document.getElementById("second");
var ap = document.getElementById("ap");
var bd = document.getElementById("bd");

function run() {
    setInterval(function() {
        const date = new Date();
        h.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        m.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        s.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        ap.innerHTML = (date.getSeconds <= 1800 ? "AM" : "PM");
    }, 1000);


}