// 절자 지향적 프로그래밍

{
    // 커핕컵 타입 설정
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7; // 샷 하나에 들어가는 커피 빈 그램 상수
        coffeeBeans: number = 0; // 초기 커피 빈

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number) {
            return new CoffeeMaker(coffeeBeans);
        }

        // 커피 내리는 함수 작성
        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }

    const maker = new CoffeeMaker(32);
    const maker2 = new CoffeeMaker(18);

    console.log(maker);
    console.log(maker2);
}
