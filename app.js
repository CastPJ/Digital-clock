function showTime() {
  var date = new Date();

  // time //
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  // day//
  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  // date//
  var dayOfMonth = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  month = month < 10 ? "0" + (month + 1) : month + 1;

  // display //
  var time = `${hour}:${minute}:${second}`;
  var year = `${dayOfMonth}-${month}-${year}`;

  document.getElementById("time").innerText = time;
  document.getElementById("day").innerText = day;
  document.getElementById("date").innerText = year;

  setTimeout(showTime, 1000);
}

showTime();
