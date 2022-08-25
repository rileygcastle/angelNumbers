const angelNumberDiv = document.getElementById("angel-number-detected");
const defaultDiv = document.getElementById("default-div");
const timeSpan = document.getElementById("time");
const nonangelTime = document.getElementById("nonangel-time");
const angelImg = document.getElementById("angel-img");
const angelNumbers = [
  "1:11",
  "2:22",
  "3:33",
  "4:44",
  "5:55",
  "10:10",
  "11:11",
  "12:12",
];
let activeAngelNumber = false;

function showAngels() {
  angelImg.classList.add("angel-left-appear");
}
function hideAngels() {
  angelImg.classList.remove("angel-left-appear");
}

function yayAngelNumber(time) {
  timeSpan.textContent = time;
  if (!activeAngelNumber) {
    activeAngelNumber = true;
    angelNumberDiv.classList.remove("hide");
    defaultDiv.classList.add("hide");
    showAngels();
  }
}
function booNoAngelNumber(time) {
  nonangelTime.textContent = time;
  if (activeAngelNumber) {
    activeAngelNumber = false;
    angelNumberDiv.classList.add("hide");
    defaultDiv.classList.remove("hide");
    hideAngels();
  }
}

function logTime() {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const splitTime = currentTime.split(":");
  const combined = splitTime[0] + ":" + splitTime[1];
  // const combined = "2:22";
  const isAngelNumber = angelNumbers.includes(combined);

  if (isAngelNumber) {
    yayAngelNumber(combined);
  } else {
    booNoAngelNumber(combined);
  }
}
logTime();
setInterval(logTime, 1000);
// setInterval(logTime, 60000);

// make array of angel numbers
// get time from toLocaleTimeString function
// use .subString to get just the hours and minutes (chop off the seconds and AM/PM)
// check if the current time is in the array of angel numbers
// if so, show cool thing
// if not, show waiting screen (oh bother)
