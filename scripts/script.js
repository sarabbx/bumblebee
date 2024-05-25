document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) 
  {
       event.preventDefault();    
       alert("Il messaggio è stato inviato!");
       form.reset();
  });
});




