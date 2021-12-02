{
  const getText = (text: string): string => text;

  console.log(getText("Hello, World"));

  const genericGetText = <T>(text: T): T => text;

  console.log(genericGetText<string>("hi"));
  console.log(genericGetText<number>(123));

  const logText = (text: string): string => text;

  ❌
  const notCoolLogText = (text:any): any => text

  const coolLogText = <T>(text:T):T => text;

  
// #1
const text1 = coolLogText<string>("Hello Generic");
// #2
const text2 = coolLogText("Hello Generic");


function longLogText<T>(text: T[]): T[] {
    console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용합니다.
    return text;
  }

  console.log(longLogText(["a",'s','d',"f"]))

  function stringLength<T>(text: string): string{
    console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용합니다.
    return text;
  }

  function logText<T>(text: T[]): T[] {
    console.log(text.length); // 제네릭 타입이 배열이기 때문에 `length`를 허용합니다.
    return text;
  }

  
  // #1
//   let str_1: <T>(text: T) => T = logText;
  // #2
//   let str_2: {<T>(text: T): T} = logText;

function conditionLogText<T>(text: T): T {
    console.log(text.length); // Error: T doesn't have .length
    return text;
  }

  interface LengthWise {
    length: number;
  }
  
  function conditionLogText2<T extends LengthWise>(text: T): T {
    console.log(text.length);
    return text;
  }
}
