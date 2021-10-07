/**
 * @제네릭의
 * @한줄정의와
 * @예시
 *  text라는 파라미터에 값을 넘겨 받아 text를 반환하는 함수
 * hi, 10, true 값에 상관없이 해당 값을 그대로 반환한다.
 * 이 관점에서 제네릭을 살펴보자
 * 통상 T로 타입을 명칭해준다.
 * */
function getText(text: any) {
    return text;
}

/**
 *  제네릭 기본 문법 적용
 */
function getTextGeneric<T>(text: T): T {
    return text;
}

const greet = getTextGeneric<string>("hi");

/**
 * @제네릭을
 * @사용하는
 * @이유
 */

function logText(text: string): string {
    return text;
}

// 위 함수는 문자열 타입을 파라미터를 하나 받고 그대로 해당 파라미터를 반환하는 함수다.
// 현재 스트링 타입만 전달이 가능한데, 만약 number 또는 boolean 값을 넘겨주고 싶을때 어떻게 해야할까?
// 이럴때 바로 제러닉이 필요하다.

function logTextAny(text: any): any {
    return text;
}
// 이런식으로도 가능하겠지만... any는 어떤 타입이 들어오고 들어가는지 알수 없기 때문에 타입스크립트를 사용하는 이유가 없다.

function logTextGeneric<T>(text: T): T {
    console.log(text);
    return text;
}

const whatTypeWithGeneric = logTextGeneric("asdsds");
