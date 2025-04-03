// Alert to verify JS is loaded
alert("Hello, world!");

// Function to increase text size to 24pt
function makeTextBigger() {
  const textArea = document.getElementById("userText");
  textArea.style.fontSize = "24pt";
}

function onTapMoo() {
  const textArea = document.getElementById("userText");
  let text = textArea.value;

  text = text.toUpperCase();

  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].trim();
    if (sentences[i].length > 0) {
      let words = sentences[i].split(" ");
      words[words.length - 1] = words[words.length - 1] + "-Moo";
      sentences[i] = words.join("_");
    }
  }
  textArea.value = sentences.join("_")
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
  alert("Changed to BoringBetty")
}

// Set up event listeners after the page loads
window.onload = function() {
  // Button event: make text bigger
  document.getElementById("biggerBtn").onclick = makeTextBigger;

  // Radio events: toggle fancy vs. boring style
  document.getElementById("fancy").onchange = applyFancyStyle;
  document.getElementById("boring").onchange = applyBoringStyle;
  document.getElementById("mooBtn").onclick = onTapMoo;
};