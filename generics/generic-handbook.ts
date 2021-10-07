/**
 *  text라는 파라미터에 값을 넘겨 받아 text를 반환하는 함수
 * hi, 10, true 값에 상관없이 해당 값을 그대로 반환한다.
 * 이 관점에서 제네릭을 살펴보자
 * 통상 T로 타입을 명칭해준다.
 * */
function getText(text) {
    return text;
}

/**
 *  제네릭 기본 문법 적용
 */
function getTextGeneric<T>(text: T): T {
    return text;
}

const greet = getTextGeneric<string>("hi");
