const btn = document.getElementById("btn");
const input = document.getElementById("input");
const hoverBox = document.getElementById("hoverBox");
const counterBtn = document.getElementById("counterBtn");
const counter = document.getElementById("counter");
const emailForm = document.getElementById("emailForm");
const emailField = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");
const testLink = document.getElementById("testLink");
const linkMessage = document.getElementById("linkMessage");
const timerText = document.getElementById("timerText");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});

input.addEventListener("keyup", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "#c8e6c9";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "#eee";
});

let count = 0;
counterBtn.addEventListener("click", () => {
  count += 1;
  counter.textContent = String(count);
});

emailForm.addEventListener("submit", (event) => {
  const value = emailField.value;
  if (!value.includes("@")) {
    event.preventDefault();
    emailMessage.textContent = "Invalid email. Must contain @";
    emailMessage.style.color = "red";
  } else {
    emailMessage.textContent = "Email looks good.";
    emailMessage.style.color = "green";
  }
});

testLink.addEventListener("click", (event) => {
  event.preventDefault();
  linkMessage.textContent = "Default navigation prevented.";
});

setTimeout(() => {
  timerText.textContent = "Text changed after 5 seconds.";
}, 5000);
