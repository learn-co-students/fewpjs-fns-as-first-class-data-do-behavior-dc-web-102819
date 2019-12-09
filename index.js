/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let hora = timeString.split(':');
  hora = parseInt(hora, 10);
  if (hora < 12){
    console.log(hora, "Morning");
    return 'Good Morning'
  }
  if (hora > 17 ){
    console.log(hora, "Evening");
    return 'Good Evening'
  }
  console.log(hora, "Afternoon");
  return 'Good Afternoon'
}
/* Write your implementation of displayMessage() */
function displayMessage(anotherString){
  document.getElementById('greeting').innerText = anotherString
}
