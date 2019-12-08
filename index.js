/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  console.log(timeString)
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(timeString) {
	time = timeString.split(":");
	if (time[0] < 12) {
		return "Good Morning";
	}
	else if (time[0] >= 12 && time[0] < 17) {
		return "Good Afternoon";
	}
	else if (time[0] >= 17) {
		return "Good Evening";
	}
	else {
		return timeString;
	}
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function displayMessage(string){
	document.getElementById('greeting').innerText = string;
}
