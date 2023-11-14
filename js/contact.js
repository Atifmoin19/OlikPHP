function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var organization = document.forms["myForm"]["organization"].value;
  var comments = document.forms["myForm"]["comments"].value;
  var enquiry = document.forms["myForm"]["enquiry"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById("error-msg").innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
    fadeIn();
    return false;
  }
  if (email == "" || email == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
    fadeIn();
    return false;
  }
  if (organization == "" || organization == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a organization*</div>";
    fadeIn();
    return false;
  }
  if (comments == "" || comments == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
    fadeIn();
    return false;
  }
  if (enquiry == "" || enquiry == null) {
    document.getElementById("error-msg").innerHTML =
      "<div class='alert alert-warning error_message'>*Please enter a enquiry*</div>";
    fadeIn();
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("simple-msg").innerHTML = this.responseText;
      document.forms["myForm"]["name"].value = "";
      document.forms["myForm"]["email"].value = "";
      document.forms["myForm"]["organization"].value = "";
      document.forms["myForm"]["comments"].value = "";
      document.forms["myForm"]["enquiry"].value = "";
    }
  };
  xhttp.open("POST", "php/contact.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "name=" +
      name +
      "&email=" +
      email +
      "&enquiry=" +
      enquiry +
      "&organization=" +
      organization +
      "&comments=" +
      comments
  );
  return false;
}
function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}
