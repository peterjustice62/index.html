const title = document.getElementById("title");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const colorText = document.getElementById("colorText");
const itemList = document.getElementById("itemList");
const newItemInput = document.getElementById("newItem");
const addItemBtn = document.getElementById("addItemBtn");
const toggleBox = document.querySelector(".toggle-box");
const toggleBtn = document.getElementById("toggleBtn");
const displayInput = document.getElementById("displayInput");
const displayBtn = document.getElementById("displayBtn");
const output = document.getElementById("output");

colorText.style.color = "teal";

changeTitleBtn.addEventListener("click", () => {
  title.textContent = "New Title";
});

addItemBtn.addEventListener("click", () => {
  const text = newItemInput.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  li.textContent = text;
  itemList.appendChild(li);
  newItemInput.value = "";
});

toggleBtn.addEventListener("click", () => {
  if (toggleBox.style.display === "none") {
    toggleBox.style.display = "block";
  } else {
    toggleBox.style.display = "none";
  }
});

displayBtn.addEventListener("click", () => {
  output.textContent = displayInput.value;
});

const missing = document.getElementById("doesNotExist");
if (!missing) {
  console.error("Element with ID 'doesNotExist' was not found.");
}
