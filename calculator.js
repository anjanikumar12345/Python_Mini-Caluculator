function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

function calculator() {
    let choice = prompt("Select operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");
    
    if (["1", "2", "3", "4"].includes(choice)) {
        let num1 = parseFloat(prompt("Enter first number: "));
        let num2 = parseFloat(prompt("Enter second number: "));
        
        let result;
        switch (choice) {
            case "1":
                result = add(num1, num2);
                break;
            case "2":
                result = subtract(num1, num2);
                break;
            case "3":
                result = multiply(num1, num2);
                break;
            case "4":
                result = divide(num1, num2);
                break;
        }
        alert("Result: " + result);
    } else {
        alert("Invalid input");
    }
}

calculator();
