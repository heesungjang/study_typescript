// Array

{
    const fruits: string[] = ["apple", "banana"];
    const scores: Array<number> = [1, 2, 3];

    // 데이터의 불변성을 유하고 싶을때  유용한 타입
    function printArray(fruits: readonly string[]) {
        console.log(fruits);
    }

    // Tuple 다른 데이터 타입을 배열에 담을 수 있다.
    // 튜플 사용을 권장하지 않는다 --> interface, type alias, class로 대채하여 사용하는걸 권장

    let student: [string, number];

    student = ["name", 123];

    student[0]; // name
    student[1]; // 123
}
