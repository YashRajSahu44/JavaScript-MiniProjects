//  Create an Array of some random quotes 

const quotes = [
  "Dream big, start small, act now.",
  "Every day is a fresh beginning.",
  "Success follows consistent effort.",
  "Stay curious and keep learning.",
  "Small progress is still progress.",
  "Believe in your potential.",
  "Focus on the journey, not the destination.",
  "Great things take time.",
  "Mistakes are proof that you're trying.",
  "Your future is created today.",
  "Discipline beats motivation.",
  "Be stronger than your excuses.",
  "Confidence comes from preparation.",
  "Growth begins outside your comfort zone.",
  "Turn challenges into opportunities.",
  "The best time to start is now.",
  "Keep moving forward.",
  "Hard work compounds over time.",
  "Stay humble, work hard.",
  "Never stop improving yourself."
];

// Select button and main heading tag

const quote = document.querySelector('h1');
const button = document.querySelector('button');

// Add event Listener on button 

button.addEventListener('click' , ()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})
