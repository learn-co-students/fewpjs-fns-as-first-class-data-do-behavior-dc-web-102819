/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  timeString = timeString.split(' ');
  var hours = parseInt(timeString[0], 10);
  var minutes = parseInt(timeString[1], 10);
  let time = `${hours}:${minutes}`
  if (hours < 12){
    return "Good Morning"
  }
  else if (hours >= 12 && hours < 17){
    return "Good Afternoon"
  }
  else if (hours > 17 && hours < 24) {
    return "Good Evening"
  }
  else if (hours >= 24 && minutes > 0 ){
    alert("invalid")
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  var greeting = document.getElementById("greeting").innerText = string;
}