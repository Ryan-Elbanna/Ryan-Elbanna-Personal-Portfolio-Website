var mybutton = document.getElementById("scroll-to-top-button");
var headerElement = document.getElementById("header-navigation-all");
// var sectionText = document.getElementById("first-section-page")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    // headerElement.style.borderBottom = "solid 1px white";
    // sectionText.style.animation = "slide-up 2s"
    // sectionText.style.opacity = "1"

  } else {
    mybutton.style.display = "none";
    headerElement.style.borderBottom = "none";
  }

}

function topFunction() {
window.scrollTo({top: 0, behavior: 'smooth'});
}

// Header and Scroll to top functions ending

// Hmaburger menu JS toggle function begin

var hamburgerIcon = document.querySelector(".hamburger-menu")
var navigationBar = document.querySelector(".nav-beginning")

hamburgerIcon.addEventListener("click", function() {
  navigationBar.classList.toggle("changeState")
})

// Hmaburger menu JS toggle function end

function validateForm() {

let form = document.getElementById("contact-mig-form-main-items");
let formErrorOut = document.getElementById("unique-form-error-display")
let formData = form.elements;
let formFirstName = formData["first-name"].value;
let formLastName = formData["last-name"].value;
let formEmail = formData["Email-add"].value
let regExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
let messageArea = document.getElementById("contact-enter-text-message-area").value;

  event.preventDefault();

  if (formFirstName == "" || formFirstName == null) {
    document.getElementById("first-name").focus();
    formErrorOut.innerHTML = "Invalid First Name!";
    formErrorOut.className = "displayError";
    formErrorOut.style.backgroundColor = "red"
    setTimeout(function() {formErrorOut.className = formErrorOut.className.replace("displayError", "");}, 2500); 
  }
  else if (formLastName == "" || formLastName == null) {
    document.getElementById("last-name").focus();
    formErrorOut.innerHTML = "Invalid Last Name!";
    formErrorOut.className = "displayError";
    formErrorOut.style.backgroundColor = "red"
    setTimeout(function() {formErrorOut.className = formErrorOut.className.replace("displayError", "");}, 2500); 
  }
  else if (!regExp.test(formEmail) ) {
    document.getElementById("Email-add").focus();
    formErrorOut.innerHTML = "Invalid Email!";
    formErrorOut.className = "displayError";
    formErrorOut.style.backgroundColor = "red"
    setTimeout(function() {formErrorOut.className = formErrorOut.className.replace("displayError", "");}, 2500);
  }
  else if (messageArea == "" || messageArea == null) {
    document.getElementById("contact-enter-text-message-area").focus();
    formErrorOut.innerHTML = "Can't leave message empty!";
    formErrorOut.className = "displayError";
    formErrorOut.style.backgroundColor = "red"
    setTimeout(function() {formErrorOut.className = formErrorOut.className.replace("displayError", "");}, 2500);
  }
  else {
    formErrorOut.innerHTML = "Email has been sent!";
    formErrorOut.className = "displayError";
    formErrorOut.style.backgroundColor = "green"
    setTimeout(function() {formErrorOut.className = formErrorOut.className.replace("displayError", "");}, 2500); 
  }
  
}

