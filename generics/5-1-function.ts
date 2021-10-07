{
    // generic 사용

    function checkNotNull(arg: number): number {
        if (arg == null) {
            throw new Error("Not a valid number");
        } else {
            return arg;
        }
    }

    function checkNotNullBad(arg: any | null): any {
        if (arg == null) {
            throw new Error("Not a valid number");
        } else {
            return arg;
        }
    }

    function checkNotNullGood<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error("Not a valid number");
        } else {
            return arg;
        }
    }

    const result = checkNotNull(123);
    const resultBad: string = checkNotNullBad(123);
    const resultGood: string = checkNotNullGood(123);
    const boal: string = checkNotNullGood(true);
    console.log(result);
    console.log(boal);
    console.log(resultGood);
    console.log(resultBad);
}
