document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var msgSection = document.getElementById("fixedmsg");
    var content = msgSection.querySelector(".content");
    var icon = document.getElementById("toggleIcon");
  
    toggleButton.addEventListener("click", function () {
      if (content.style.display === "none") {
        content.style.display = "block";
        msgSection.style.minHeight = "17rem"; 
        msgSection.style.padding = "1rem 0 3rem 0";
        icon.innerText = "keyboard_arrow_up";
      } else {
        content.style.display = "none";
        msgSection.style.minHeight = "3rem"; 
        msgSection.style.padding = "1rem 0 3rem 0";
        icon.innerText = "keyboard_arrow_down";
      }
    });
  });