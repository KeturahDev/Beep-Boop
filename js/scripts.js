// B U S I N E S S   L O G I C


// U S E R   I N T E R F A C E   L O G I C
$(document).ready(function () {
  $('#formy').submit(function (event) {
    event.preventDefault();
    var number = $('#userNumber').val();

    // console.log('number is:', number)
    $('#output').show();
    $('#output').text(boopThis(number))
  })
})