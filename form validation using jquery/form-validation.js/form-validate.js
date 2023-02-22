$(document).ready(function () {
  $("#signupForm").validate({

    rules: {
      firstname: "required",
      lastname: "required",
    
      username: {
        required: true,
        minlength: 2
      },

      password: {
        required: true,
        minlength: 5
      },

      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password"
      },

      email: {
        required: true,
        email: true
      },

      agree: "required"

    },

    messages: {

      firstname: "Please enter your firstname",

      lastname: "Please enter your lastname",

      username: {
        required: "Please enter a username",
        minlength: "Your username must consist of at least 2 characters"
      },

      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },

      confirm_password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        equalTo: "Please enter the same password as above"
      },

      email: "Please enter a valid email address",

      agree: "Please accept our policy",


    },
    submitHandler: function(form) {
      alert("Form submitted successfully!");
    }
  });
});

let arr = ['firstname', 'lastname', 'username', 'email', 'confirm_password', 'password'] 
  
arr.forEach((element) => {
  $(`#${element}`).on('change', () => {
    if (!$(`#${element}`).valid()) {
        $(`#${element}`).addClass("error");
    } else {
      $(`#${element}`).removeClass("error");
    }
  })
})
 
$("#signupForm").submit(function (event) {
  event.preventDefault();
  var first_name = $("input[name='firstname']").val();
  var last_name = $("input[name='username']").val();
  var email = $("input[name='email']").val();

  var userData = {
    first_name: first_name,
    last_name: last_name,
    email: email
  }
  $.ajax({
    type: "POST",
    url: "https://reqres.in/api/users",
    data: JSON.stringify(userData),
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
    console.log(data);

       $('#userTable').append(`<tr>
            <td>${data.first_name}</td>
            <td>${data.last_name}</td>
            <td>${data.email}</td>
          </tr>`)
    }
    
  });
})
 



   

