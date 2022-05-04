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

var hamburgerIcon = document.querySelector(".hamburger-menu")
var navigationBar = document.querySelector(".nav-beginning")

hamburgerIcon.addEventListener("click", function() {
  navigationBar.classList.toggle("changeState")
})

