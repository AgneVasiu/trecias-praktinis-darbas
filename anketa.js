var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var ageError = document.getElementById("age-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
var sucessMessaga = document.getElementById("sucsess-note");
var form = document.getElementById("form");

function validateName() {
  var name = document.getElementById("Name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Irašykite savo vardą";
    return false;
  }
  if (name.length < 3) {
    nameError.innerHTML = "Vardas turi būti bent 3 raidžių";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Elektroninis paštas privalomas";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML =
      "Neteisingas elektroninis paštas pvz: 'name@email.com'";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateAge() {
  var age = document.getElementById("age").value;
  if (age.length == 0) {
    ageError.innerHTML = "Iveskite savo amžių";
    return false;
  }
  if (!age.match(/^[0-9]{1,2}$/)) {
    ageError.innerHTML = "Iveskite savo amžių tik skaičiais";
    return false;
  }

  ageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateComment() {
  var message = document.getElementById("comment").value;
  var required = 10;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " Iveskite daugiau simbolių";
    return false;
  }
  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateForm() {
  var valid = true;
  if (!validateName() || !validateEmail() || !validateAge()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Forma užpildyta neteisingai patikrinkite duomenis";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    valid = false;
    return false;
  }
  if (valid) {
    sucessMessaga.style.display = "block";
    sucessMessaga.innerHTML =
      '<i class="fas fa-check-circle"></i> Sėkmingai pateikta';
    setTimeout(function () {
      sucessMessaga.style.display = "none";
    }, 9000);
    form.reset();
    return false;
  }
}
