function emailSend() {
  var userName = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var messageBody =
    "Name " + userName + "<br/> Phone " + phone + "<br/> Email " + email;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "graphicstudent099@gmail.com",
    Password: "0AA65F812A3712C4B58406DB446DE0E90488",
    To: "graphicstudent099@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal("successfull", "You clicked the button!", "success");
    } else {
      swal("Error", "You clicked the button!", "error");
    }
  });
}
