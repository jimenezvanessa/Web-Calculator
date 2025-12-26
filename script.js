let display = document.getElementById('display');
let currentInput = '';
let expression = '';

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  expression += value;
  display.textContent = currentInput;

  showHeart(); // ❤️ heart animation
}

function clearDisplay() {
  currentInput = '';
  expression = '';
  display.textContent = '0';
}

function calculateResult() {
  try {
    let result = eval(expression);
    if (result === Infinity || isNaN(result)) {
      display.textContent = 'Error';
      currentInput = '';
      expression = '';
    } else {
      display.textContent = result;
      currentInput = result.toString();
      expression = result.toString();
    }
  } catch {
    display.textContent = 'Error';
    currentInput = '';
    expression = '';
  }
}

function showHeart() {
  const wrapper = document.querySelector(".display-wrapper");
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 80 + "%";
  heart.style.bottom = "10px";

  wrapper.appendChild(heart);

  setTimeout(() => heart.remove(), 800);
}