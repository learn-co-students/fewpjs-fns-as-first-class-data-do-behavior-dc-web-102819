/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  // console.log(time);
  let hour = time.split(':');
  // console.log(hour);
  
  let hour_num = parseInt(hour);
  // console.log(hour_num);

  if (hour_num < 12) {
    return "Good Morning"
  } else if (hour_num >= 12 && hour_num < 17) {
    return "Good Afternoon"
  } else if (hour_num >= 17) {
    return "Good Evening"
  } else { return time }
}


/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = str;
}