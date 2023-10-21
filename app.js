/*Just declaring variables */
let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

/*We get the real time using the intergated function from javascript called 
new Date() with a combination of some more integrated methods that go with it,
getMinutes, getHours and getSeconds and we replace the text inside the specified
html elements with the current time, i also made it nicer by adding a 0 infront
of the time if the time is under 10, so if its 9 it shows 09.*/

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
/*At the end, we just have to get something that will keep running the function and
updating it, 0.1 second is ideal because if we make it 0.5 seconds it wont be as 
accurate, it doesnt really make a big difference since the difference would be 
very slim, but still its better to be more accurate than not */
setInterval(() => {
  updateTime();
}, 100);
