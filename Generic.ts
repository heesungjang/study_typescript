{
  // 함수나 컴포넌트를 재사용할때 타입이 하나도 정해지면 동적으로
  // 여러가지 타입에 대응하는 컴포넌트 또는 함수를 만들기 힘듬.
  const getText = (text: string): string => text;

  console.log(getText("Hello, World"));
}
