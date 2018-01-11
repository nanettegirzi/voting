$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#voting').show();
  } else if (age === 18) {
    alert("Yay you made to your first election!");
    $('#voting').show();
  } else {
    $('#under-18').show();
  }
});
