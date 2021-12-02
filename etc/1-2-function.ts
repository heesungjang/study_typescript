const printName = (firstName: string, lastName: string = "joseph") => {
    console.log(firstName);
    console.log(lastName);
};

printName("zion", "joseph");

printName("zion");
printName("zion", undefined);

//Rest parameter

function addNUmbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
}

console.log(addNUmbers(1, 2, 3, 4, 5));
