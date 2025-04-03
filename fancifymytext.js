// Alert to verify JS is loaded
alert("Hello, world!");

// Function to increase text size to 24pt
function makeTextBigger() {
  const textArea = document.getElementById("userText");
  textArea.style.fontSize = "24pt";
}

// Function to apply "FancyShmancy" styling
function applyFancyStyle() {
  const textArea = document.getElementById("userText");
  textArea.style.fontWeight = "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
}

// Function to revert to "BoringBetty" styling
function applyBoringStyle() {
  const textArea = document.getElementById("userText");
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
  // Optionally revert font size to default
  textArea.style.fontSize = "1em";
}

// Set up event listeners after the page loads
window.onload = function() {
  // Button event: make text bigger
  document.getElementById("biggerBtn").onclick = makeTextBigger;

  // Radio events: toggle fancy vs. boring style
  document.getElementById("fancy").onchange = applyFancyStyle;
  document.getElementById("boring").onchange = applyBoringStyle;
};