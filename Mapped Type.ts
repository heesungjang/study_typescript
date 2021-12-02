var arr = [
  { id: 1, title: "함수" },
  { id: 2, title: "변수" },
  { id: 3, title: "인자" },
];
var result = arr.map(function (item) {
  return item.title;
});
console.log(result); // ['함수', '변수', '인자'];

/**
 * 
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
 */

{
  type Heroes = "Hulk" | "Thor" | "Capt";

  type HeroProfiles = { [K in Heroes]: number };
  const heroInfo: HeroProfiles = {
    Hulk: 54,
    Thor: 1000,
    Capt: 33,
  };
}

{
  type Subset<T> = {
    [K in keyof T]?: T[K];
  };

  interface Person {
    age: number;
    name: string;
  }

  const ageOnly: Subset<Person> = { age: 23 };
  const nameOnly: Subset<Person> = { name: "Tony" };
  const ironman: Subset<Person> = { age: 23, name: "Tony" };
  const empty: Subset<Person> = {};
}
