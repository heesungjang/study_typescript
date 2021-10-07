// a or b function
interface Either<L, R> {
    left: () => L;
    right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
    // constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
    constructor(private leftValue: L, private rightValue: R) {}

    left(): L {
        return this.leftValue;
    }

    right(): R {
        return this.rightValue;
    }
}

const either: Either<number, number> = new SimpleEither(4, 5);

console.log(either.left());
console.log(either.right());

const best = new SimpleEither({ name: "zion" }, 3);

console.log(best.left());
