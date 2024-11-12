// const fruits = ["apple", "banana", "cherry"];

const fruits = new Array("apple", "banana", "cherry");
console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes());

Array.prototype.getName = function () {
    console.log(this);
};

fruits.getName();

const newArr = [];
newArr.getName(); // []

// 배열데이터 혹은 인스턴스라고 일컫는다.
// 이렇게 인스턴스에서 볼 수 있는 별도의 속성이나 메서드를 등록하는 객체

// 우리가 그동안 생성자 함수를 사용하지 않고 각각의 데이터를 얻은 것은 더 쉽게 만들 수 있게 각각의 리터럴 방식으로 만들었을 뿐입니다.

const user = {
    firstName: "segonJin",
    lastName: "Kim",
    getFullName: function () {
        // 객체 리터럴 내부에서 일반함수로 메서들르 만들면 this 키워드를 통해 접근이 가능.
        return `${this.firstName} ${this.lastName}`;
    },
    //
};

const user2 = {
    firstName: "Neo",
    lastName: "Kim",
};

console.log(user.getFullName());

console.log(user.getFullName.call(user2)); // 너무 불필요한 로직.

// Prototype 으로 재사용할 수 있게 만들어보자.
