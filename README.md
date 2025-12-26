# Pastel Calculator with Heart Animation

A simple and visually appealing calculator web app with pastel pink and purple button styles and a cute floating heart animation on input. Built with HTML, CSS, and JavaScript.

---

## Features

- **Pastel pink buttons** with purple hover effect.
- **Operator buttons** styled in purple and invert colors on hover.
- Responsive grid layout for buttons.
- Calculator supports basic operations: addition, subtraction, multiplication, and division.
- Clear (`C`) and equals (`=`) buttons.
- Floating heart animation appears every time a number or operator button is clicked.
- Displays errors for invalid calculations.

---

## Demo

*Add a screenshot or demo link here if available.*

---

## Installation

1. Clone or download this repository.

```bash
git clone https://github.com/yourusername/pastel-calculator.git
```

2. Open `index.html` in your preferred browser.

---

## Usage

- Click number and operator buttons to input expressions.
- Click `=` to calculate the result.
- Click `C` to clear the display.
- Watch hearts float whenever you input values!

---

## File Structure

```
/ (root)
├── index.html      # Main HTML file
├── style.css       # Styles for layout and colors
└── script.js       # Calculator logic and animation
```

---

## How It Works

- Buttons append values to the expression shown in the display.
- On each input, a heart element is created, animated, and removed after 0.8 seconds.
- The calculation uses JavaScript `eval()` to evaluate the expression.
- Error handling shows "Error" when the input is invalid or division by zero.

---

## Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari).
- No dependencies or build tools required.

---

## License

This project is licensed under the MIT License.

---

## Author

[Your Name]  
[Your Contact or GitHub URL]

---

## Acknowledgements

Inspired by pastel design trends and fun UI animations.
