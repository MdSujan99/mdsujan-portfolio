function toggleNav() {
  document
    .getElementById("myHeader")
    .classList.toggle("header-container-vertical");
  document
    .getElementById("header-navbar-id")
    .classList.toggle("header-navbar-vertical");
}

const myForm = document.forms["myForm"];

myForm.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm["email"].value)
  ) {
    const formData = {
      userName: myForm["name-input"].value,
      userEmail: myForm["email-input"].value,
      userMessage: myForm["message"].value,
    };
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "mysmtp@elasticemail.com",
      Password: "4B72FCC06A5E507DC28494C71E1DD9FF7C82",
      To: "khans8962@gmail.com",
      From: "khans8962@gmail.com",
      Subject: "Contact Form Message from  : " + formData.userEmail,
      Body: "Message:\n" + formData.userMessage,
    }).then((message) => alert(message));
    console.log(formData);
    myForm.reset();

    return true;
  } else {
    console.log("You have entered an invalid email address!");
    myForm.reset();
    return false;
  }
}
