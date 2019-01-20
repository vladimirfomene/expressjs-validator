$('#signup-form').submit(function(e){
    return false;
});



$('#signup-btn').click(function(){
  $.ajax({
    url: '/users',
    type: 'POST',
    cache: false,
    data: {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      classYear: $('#classYear').val(),
      email: $('#email').val(),
      phoneNumber: $('#phoneNumber').val(),
      password: $('#password').val(),
      confirmPassword: $('#confirmPassword').val(),
      isAdmin: $('#isAdmin').val()

    },
    success: function(data){
      alert("Your Submission was Successful");
    },
    error: function(data){
      $('#error-group').css('display', 'block');
      errors = JSON.parse(data.responseText);
      for(var i = 0; i < errors.length; i++){
        $('#errors').append("<li>" + errors[i].msg + "</li>");
      }
    }
  });
});

