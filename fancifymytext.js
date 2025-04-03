// Simple alert to confirm your JS is loaded
alert("Hello from fancifymytext.js!");

// Increase the text size when 'Bigger!' is clicked
function makeTextBigger() {
  const textArea = document.getElementById("userText");
  // You could dynamically calculate the current size; 
  // here we'll just bump it to something noticeably larger
  textArea.style.fontSize = "24pt";
}

// Apply "FancyShmancy" styles
function applyFancyStyle() {
  const textArea = document.getElementById("userText");
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
  // You can add or remove any other styles as desired
}

// Revert to normal "BoringBetty" styles
function applyBoringStyle() {
  const textArea = document.getElementById("userText");
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
  textArea.style.fontSize = "1em"; // revert to a default size
}

// Add event listeners after the page loads
window.onload = function() {
  // Button: make the text bigger
  document.getElementById("biggerBtn").onclick = makeTextBigger;

  // Radio buttons: fancy vs. boring
  document.getElementById("fancy").onchange = applyFancyStyle;
  document.getElementById("boring").onchange = applyBoringStyle;
};