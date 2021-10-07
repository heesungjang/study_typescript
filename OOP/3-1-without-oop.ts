// 절자 지향적 프로그래밍

{
    // 커핕컵 타입 설정
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // 샷 하나에 들어가는 커피 빈 그램 상수
    const BEANS_GRAMM_PER_SHOT: number = 7;

    // 초기 커피 빈
    let coffeeBeans: number = 0;

    // 커피 내리는 함수 작성
    function makeCoffee(shots: number): CoffeeCup {
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error("Not enough coffee beans!");
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        };
    }

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}
