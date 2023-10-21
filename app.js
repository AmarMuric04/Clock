let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

const updateTime = () => {
  newtime = new Date();
  if (newtime.getMinutes() < 10) {
    minutes.innerHTML = "0" + newtime.getMinutes();
  } else {
    minutes.innerHTML = newtime.getMinutes();
  }
  if (newtime.getSeconds() < 10) {
    seconds.innerHTML = "0" + newtime.getSeconds();
  } else {
    seconds.innerHTML = newtime.getSeconds();
  }
  if (newtime.getHours() < 10) {
    hours.innerHTML = "0" + newtime.getHours();
  } else {
    hours.innerHTML = newtime.getHours();
  }
  if (newtime.getHours() <= 12) {
    document.querySelector(".amOrPm").innerHTML = "AM";
  } else {
    document.querySelector(".amOrPm").innerHTML = "PM";
  }
};

setInterval(() => {
  updateTime();
}, 100);
