// Animation des Hintergrunds
function animateBackground() {
    var canvas = document.createElement("canvas");
    return canvas.getContext && canvas.getContext("2d");
  
    // Hintergrundfarbe
    ctx.fillStyle = "#2d303b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Wellen
    var x = 0;
    var y = 0;
    var amplitude = 10;
    var frequency = 10;
    var speed = 0.1;
  
    setInterval(function() {
      x += speed;
      if (x > canvas.width) {
        x = 0;
      }
  
      y = amplitude * Math.sin(2 * Math.PI * frequency * x);
  
      ctx.fillStyle = "#fff";
      ctx.fillRect(x, y, 10, 10);
    }, 10);
  }
  
  // Initialisierung der Animation
  window.onload = function() {
    animateBackground();
  };
  
  // Funktion zum Ausführen der Übergangsanimation
function transitionToInformation() {
  // Den Hintergrund des Hauptfensters mit einem schwarzen Schleier überziehen
  document.body.style.backgroundColor = "black";

  // Die Sidebar ausblenden
  document.querySelector("#menu").style.display = "none";

  // Die Informationen.html-Datei laden
  window.location.href = "information.html";

  // Den schwarzen Schleier entfernen
  setTimeout(function() {
    document.body.style.backgroundColor = "";
  }, 1000);
}

// Den "Informationen"-Link mit der Übergangsanimation verknüpfen
document.querySelector("#menu a[href='information.html']").addEventListener("click", transitionToInformation);

const nav = document.getElementById("nav");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
