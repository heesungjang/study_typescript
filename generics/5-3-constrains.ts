interface Employee {
    pay: () => void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log("full time!");
    }
    workFullTime() {}
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log("part time!");
    }
    workParkTime() {}
}

// 세부적인 타입을 인자로 받았지만 ---> 다시 추상적인 타입으로 반환하는 함수는 💩
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function payGood<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const bob = new FullTimeEmployee();
const zion = new PartTimeEmployee();

bob.workFullTime();
zion.workParkTime();

const bobAfterPay = payGood(bob);
const zionAfterPay = payGood(zion);

bobAfterPay.workFullTime();
