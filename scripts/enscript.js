document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (event) 
    {
         event.preventDefault();    
         alert("Message has been sent!");
         form.reset();
    });
  });
  
  
  
  
  