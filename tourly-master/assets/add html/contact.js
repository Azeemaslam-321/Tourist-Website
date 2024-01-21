document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
  
            
  
            alert("Form submitted! Thank you for contacting us."); 
  
            
        });
    }
  });