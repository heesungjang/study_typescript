/**
 * Let's make a calculator 🧮
 */

type Operation = "add" | "subtract" | "multiply" | "divide" | "remainder";
function calculate(
    operator: Operation,
    num_1: number,
    num_2: number
): number | null {
    switch (operator) {
        case "add":
            return num_1 + num_2;
        case "subtract":
            return num_1 - num_2;
        case "multiply":
            return num_1 * num_2;
        case "divide":
            return num_1 / num_2;
        case "remainder":
            return num_1 % num_2;
        default:
            throw new Error("unknown operation command");
    }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
