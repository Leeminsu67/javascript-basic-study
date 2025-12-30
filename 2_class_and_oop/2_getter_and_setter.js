/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }
  // setter는 무조건 파라미터를 하나 받아야한다
  set setName(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = "장원영";
console.log(yuJin);

// private일때 사용하면 정말 좋다
class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }
  // setter는 잘 사용하지 않는다
  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = "코드팩토리";
console.log(yuJin2.name);
