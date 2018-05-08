function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var d = today.getHours();
  var dayHour = today.getHours();
  if (dayHour == 0 ) { dayHour = 1 };
  var min = today.getMinutes();
  var weekDay = today.getDay();
  min = checkTime(min);

  // Calculate the current date of the year
  var timestmp = new Date().setFullYear(new Date().getFullYear(), 0, 1);
  var yearFirstDay = Math.floor(timestmp / 86400000);
  var today = Math.ceil((new Date().getTime()) / 86400000);
  var dayOfYear = today - yearFirstDay;

  mLeft = Math.round((min / 60) * 100);
  dLeft = Math.round((dayHour / 24) * 100);
  wLeft = Math.round((weekDay / 7) * 100);
  yLeft = Math.round((dayOfYear / 365) * 100);
  document.getElementById('time').innerHTML = d + ":" + min;
  document.getElementById('mLeft').innerHTML = mLeft + "%";
  document.getElementById('dLeft').innerHTML = dLeft + "%";
  document.getElementById('wLeft').innerHTML = wLeft + "%";
  document.getElementById('yLeft').innerHTML = yLeft + "%";
  yLeftNum = parseInt("yLeft", 10) + '%';
  console.log(typeof yLeftNum);
  document.getElementById('yearProgressBar').style.width = yLeft + '%';
  t = setTimeout(function() {
    startTime()
  }, 60000);
}
document.addEventListener("DOMContentLoaded", function(event) {
    startTime();
  });