// B U S I N E S S   L O G I C
var boopThis = function (number) {
  var number = parseInt(number);
  if (isNaN(number)) {
    return 'please enter a number';
  } else {
    return number
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