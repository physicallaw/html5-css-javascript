window.onload = function() {
   var circle = document.getElementById("circle");
   setTimeout(function() {
      circle.style.marginLeft = "500px";
      circle.style.transition = "2s";
      circle.style.transform = "rotate(360deg)";
   }, 1000);
}