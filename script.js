console.log("Hello world!")

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  mLeft = Math.round((today.getMinutes() / 60) * 100);
  dLeft = Math.round((today.getHours() / 24) * 100);
  wLeft = Math.round((today.getDay() / 7) * 100);
  document.getElementById('time').innerHTML = h + ":" + m;
  document.getElementById('mLeft').innerHTML = mLeft + "%";
  document.getElementById('dLeft').innerHTML = dLeft + "%";
  document.getElementById('wLeft').innerHTML = wLeft + "%";
  t = setTimeout(function() {
    startTime()
  }, 60000);
}
document.addEventListener("DOMContentLoaded", function(event) {
    startTime();
  });