// ---------------------------- 
// DOM QUERIES
// ----------------------------
const changeTextBtn = document.getElementById("changeTextBtn");
const textTarget = document.getElementById("textTarget");

const colorBtn = document.getElementById("colorBtn");
const colorBox = document.getElementById("colorBox");

const dayMessage = document.getElementById("dayMessage");

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

// ----------------------------
// FUNCTION 1: UPDATE PAGE CONTENT
// ----------------------------
function updateText() {
  textTarget.textContent = "The text has been updated using JavaScript!";
}

changeTextBtn.addEventListener("click", updateText);

// ----------------------------
// FUNCTION 2: CHANGE A CSS PROPERTY
// ----------------------------
function changeColor() {
  colorBox.style.backgroundColor = 
    colorBox.style.backgroundColor === "lightgray" ? "var(--accent)" : "lightgray";
}

colorBtn.addEventListener("click", changeColor);

// ----------------------------
// EXTRA CREDIT: Responsive Nav Toggle
// ----------------------------
navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");
});

// ----------------------------
// DAY OF THE WEEK FEATURE
// ----------------------------
const today = new Date().getDay(); 
// 0=Sun, 1=Mon, ..., 6=Sat

if (today === 0) {
  dayMessage.textContent = "Sunday reset: take it slow today.";
  dayMessage.style.color = "#b30000";
} else if (today === 1) {
  dayMessage.textContent = "Monday motivation: you got this!";
  dayMessage.style.color = "#0047b3";
} else if (today === 2) {
  dayMessage.textContent = "Tuesday tip: stay hydrated!";
  dayMessage.style.color = "#008c3a";
} else if (today === 3) {
  dayMessage.textContent = "Wednesday wisdom: progress is not linear.";
  dayMessage.style.color = "#aa00aa";
} else if (today === 4) {
  dayMessage.textContent = "Thursday thought: a small step counts.";
  dayMessage.style.color = "#ff8800";
} else if (today === 5) {
  dayMessage.textContent = "Friday feeling: the weekend is near!";
  dayMessage.style.color = "#006666";
} else if (today === 6) {
  dayMessage.textContent = "Saturday spark: do something joyful.";
  dayMessage.style.color = "#990000";
}
