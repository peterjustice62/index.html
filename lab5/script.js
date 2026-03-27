const name = "Alice";
const age = 20;
const major = "Computer Science";

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Major: ${major}`);

function greet(user) {
  alert(`Welcome, ${user}`);
}

function sum(a, b) {
  return a + b;
}

const fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach((fruit) => console.log(fruit));

document.getElementById("greetBtn").addEventListener("click", () => {
  greet("Bob");
});

document.getElementById("sumBtn").addEventListener("click", () => {
  const result = sum(5, 7);
  alert(`Sum: ${result}`);
});

document.getElementById("evenOddBtn").addEventListener("click", () => {
  const input = prompt("Enter a number:");
  const num = Number(input);

  if (Number.isNaN(num)) {
    alert("That is not a valid number.");
    return;
  }

  if (num % 2 === 0) {
    alert(`${num} is even.`);
  } else {
    alert(`${num} is odd.`);
  }
});
