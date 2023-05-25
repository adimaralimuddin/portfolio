const form = document.querySelector("#contact-form");
const test = document.querySelector("#test");

form.addEventListener("submit", function (e) {
  // e.stopPropagation();
  e.preventDefault();
  sendEmail();
});

function sendMail2() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "adimaraisha@gmail.com",
    // To : 'them@website.com',
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

function sendEmail(e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  var params = {
    name,
    email,
    message,
  };
  let serviceId = "service_s0fi9qc";
  let templateId = "template_1u5vyzc";
  let templateId2 = "template_84928uz";

  emailjs
    .send(serviceId, templateId, params)
    .then(function (res) {
      alert("message sent! i'll get in touch as soon as possible. Thank You!");
      emailjs.send(serviceId, templateId2, {
        name,
        email,
        message: "response message",
      });
    })
    .catch(function (error) {
      console.log(error);
      alert(
        "there is an error in contacting me, please check if the email is valid.",
        error
      );
    });
}
