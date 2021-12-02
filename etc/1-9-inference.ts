/**
 *  Type Inference
 */

// 변수를 만들때 초기에 타입을 정해주지 않아도 아래 text는 문자열 타입으로 타입스크립트가 추론한다.
let text = "hello";
// text = 1 << --- 이렇게 작성할 경우 타입 에러가 발생

// 하지만 함수의 인자 값은 타입을 정해주지 않으면 any 타입으로 설정되어 아무 값이나 들어갈 수 있다.
function print(message = "hello") {
    console.log(message);
}
// 아래와 같이 문자열 / 넘버 다 가능하다.
print("hello");
// print(1);

function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);

// 타입 추론은 좋은가?
// 아니다 프로젝트에서 코드가 복잡해지면 추론을 하기보다는 타입을 명시해주는게 좋다
// 다만 원시 타입 같은 경우에는 추론을 사용하는것이 효율적일 수 있다.
