'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

const tourSearchForm = document.querySelector(".tour-search-form");

if (tourSearchForm) {
  tourSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const destination = document.getElementById("destination").value;
    const people = document.getElementById("people").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

   
    if (destination.trim() === "") {
      alert("Please enter a destination");
      return;
    }

    // Example: Check if people is a valid number
    if (isNaN(people) || parseInt(people) <= 0) {
      alert("Please enter a valid number of people");
      return;
    }

    
    if (new Date(checkin) >= new Date(checkout)) {
      alert("Checkin date must be before checkout date");
      return;
    }

    // Perform additional actions or send data to the server
    console.log("Tour Search Form Submitted!");
    console.log("Destination: ", destination);
    console.log("People: ", people);
    console.log("Checkin Date: ", checkin);
    console.log("Checkout Date: ", checkout);

   
    tourSearchForm.reset();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const bookNowButton = document.getElementById("bookNowBtn");

  if (bookNowButton) {
      bookNowButton.addEventListener("click", function () {
          
          alert("Booking confirmed! Thank you for choosing Tourly.");

         
      });
  }
});
