/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  hora = string.split(':');
  hora = parseInt(hora, 10);
  if (hora < 12){
    return 'Good Morning'
  }
  if (hora > 17 ){
    return 'Good Evening'
  }
  return 'Good Afternoon'
}
/* Write your implementation of displayMessage() */
function displayMessage(anotherString){
  document.getElementById('greeting').innerText = anotherString
}
