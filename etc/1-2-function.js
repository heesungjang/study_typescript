var printName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "joseph"; }
    console.log(firstName);
    console.log(lastName);
};
printName("zion", "joseph");
printName("zion");
printName("zion", undefined);
//Rest parameter
function addNUmbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; });
}
console.log(addNUmbers(1, 2, 3, 4, 5));
