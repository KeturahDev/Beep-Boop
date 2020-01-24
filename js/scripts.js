// B U S I N E S S   L O G I C
var boopThis = function (number) {
  var number1 = parseInt(number);
  console.log('number in boop function is', number)
  if (number1 === NaN) {
    console.log('number is NaN', number1);
    return 'please enter a number';
  } else {
    return number1
  }
};

// U S E R   I N T E R F A C E   L O G I C
$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    var number = $('#userNumber').val();

    console.log('number is:', number)
    $('#output').show();
    $('#output').text(boopThis(number))
  });
});