$(document).ready(function() {

  $('#form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    $(".error").remove();

    if (name.length < 1) {
      $('#name').after('<span class="error">Please Enter Your Name</span>');
      $('#name').addClass("input-not-vaild");
    }

    if (email.length < 1) {
      $('#email').after('<span class="error">Please Enter a valid email address</span>');
      $('#email').addClass("input-not-vaild");
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email address</span>');
        $('#email').addClass("input-not-vaild");
      }
    }
    if (password.length < 7) {
      $('#password').after('<span class="error">Password must be at least 7 characters long</span>');
      $('#password').addClass("input-not-vaild");
    }
  });

});