const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("clear")) {
            expression = "";
            display.value = "";
        } 
        else if (button.classList.contains("equals")) {
            try {
                expression = expression
                    .replace("×", "*")
                    .replace("÷", "/")
                    .replace("−", "-");
                display.value = eval(expression);
                expression = display.value;
            } catch {
                display.value = "Error";
                expression = "";
            }
        } 
        else {
            expression += value;
            display.value = expression;
        }
    });
});

// Bonus: Keyboard Support
document.addEventListener("keydown", (e) => {
    if ("0123456789.+-*/".includes(e.key)) {
        expression += e.key;
        display.value = expression;
    }
    if (e.key === "Enter") {
        try {
            display.value = eval(expression);
            expression = display.value;
        } catch {
            display.value = "Error";
            expression = "";
        }
    }
    if (e.key === "Backspace") {
        expression = expression.slice(0, -1);
        display.value = expression;
    }
    if (e.key === "Escape") {
        expression = "";
        display.value = "";
    }
});
