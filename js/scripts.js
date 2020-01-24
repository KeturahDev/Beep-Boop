// B U S I N E S S   L O G I C
var boopThis = function (number) {

  if (number.includes(' ', ',')) {
    return 'please enter only one number'
  } else {
    var number = parseInt(number);
    if (isNaN(number)) {
      return 'please enter a number';
    } else {
      // var numberArray = number.split(" ")
      // if (numberArray.length > 1) {
      //   return 'please enter only one number';
      // } else {
      //   return number;
      // }
      return number;
    };

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