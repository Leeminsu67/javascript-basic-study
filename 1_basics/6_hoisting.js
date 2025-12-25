/**
 * Hoisting
 */
console.log("Hello");
console.log("world");

// console.log(name);
// var name = "코드팩토리";
// console.log(name);

/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다
 */
var name;
console.log(name);
name = "코드팩토리";
console.log(name);

// let과 const는 에러가 나지만 hoisting이 된다
console.log(yuJin);
// let yuJin = "안유진";
const yuJin = "안유진";
// console.log(yuJin);

// var키워드는 에러로 막아주지 못하지만 let과 const는 에러로 미리 막아준다
