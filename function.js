const form = document.querySelector("#contact-form");
const test = document.querySelector("#test");

form.addEventListener("submit", function (e) {
  e.stopPropagation();
  sendEmail();
});

function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  let serviceId = "service_cz2ul2k";
  let templateId = "template_bb75zak";

  emailjs
    .send(serviceId, templateId, params)
    .then(function (res) {
      console.log("res");
      alert("message sent. i'll get in touch as soon as possible. thank you!");
    })
    .catch(function (error) {
      console.log(error);
      alert(
        "there is an error in contacting me, please check if the email is valid."
      );
    });
}
