// B U S I N E S S   L O G I C
var boopThis = function (number) {
  number = number.trim()

  if (number.includes(' ', ',')) {
    return 'please enter only one number'
  } else {
    var number = parseInt(number);
    if (isNaN(number)) {
      return 'please enter a number';
    } else {
      var numberArray = [];
      for (var i = 0; i <= number; i++) {
        numberArray.push(i);
      }
      numberArray = numberArray.map(function (number) {
        if (String(number).includes(2)) {
          number = 'boop';
        }
        if (String(number).includes(1)) {
          number = 'beep';
        }
        return number;
      })
      return numberArray;
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