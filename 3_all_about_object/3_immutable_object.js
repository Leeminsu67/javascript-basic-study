/**
 * Immutable Object
 */
const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin);

/**
 * Extensible
 * 확장이 가능한지 여부
 */
console.log(Object.isExtensible(yuJin));

yuJin.position = "vocal";
console.log(yuJin);

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin.groupName = "아이브";
console.log(yuJin);
// 에러를 던지진 않는다

// 삭제는 되나?
delete yuJin.position;
console.log(yuJin);
// 삭제는 된다

/**
 * Seal
 */
const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin2);
console.log(Object.isSealed(yuJin2));
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

yuJin2.groupName = "아이브";
console.log(yuJin2);

delete yuJin2.name;
console.log(yuJin2);
// 삭제도 되지 않는다 그리고 에러도 뱉지 않는다

Object.defineProperty(yuJin2, "name", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));
// seal을 하는 작업은 configurable을 false로 변경하는것과 똑같다

/**
 * Freezed
 *
 * 읽기 외에 모든 기능을 불가능하게 한다
 */
const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3.groupName = "아이브";
console.log(yuJin3);

yuJin3.name = "mingdev";
console.log(yuJin3);

delete yuJin3.name;
console.log(yuJin3);

// Object.defineProperty(yuJin3, "name", { value: "mingdev" });
console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));

const yuJin4 = {
  name: "안유진",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4.wonYoung));
// 상위 object는 변경이 되었지만 하위 object는 변경이 되지 않는다
