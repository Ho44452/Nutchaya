// Set your start date here (YYYY-MM-DD HH:MM:SS)
const startDate = new Date('2022-02-14T00:00:00');

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('days').textContent = days.toString().padStart(3, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCounter, 1000);
updateCounter();

// Sakura petals effect with tsParticles
tsParticles.load("tsparticles", {
  background: { color: "#fff0f6" },
  fullScreen: { enable: false },
  particles: {
    number: { value: 24, density: { enable: true, area: 800 } },
    color: { value: ["#ffb6d5", "#ff69b4", "#fff"] },
    shape: {
      type: "char",
      character: {
        value: ["❀", "✿", "🌸", "❁"],
        font: "Pacifico, cursive, Arial",
        style: "",
        weight: "bold"
      }
    },
    opacity: { value: 0.7, random: true },
    size: { value: 32, random: { enable: true, minimumValue: 18 } },
    move: {
      enable: true,
      speed: 1.1,
      direction: "bottom",
      random: false,
      straight: false,
      outModes: { default: "out" }
    },
  },
  detectRetina: true
});
