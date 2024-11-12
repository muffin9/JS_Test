// 데이터 타입 확인

const num = 100;
console.log(typeof num);

console.log(typeof "Hello");
console.log(typeof "Hello" === "string"); // true?
console.log(typeof false === "boolean"); // true?
console.log(typeof undefined === "undefined"); // true?
console.log(typeof null === "null"); // false?
console.log(typeof null === "object"); // true?

console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object

console.log([].constructor === Array); // true
console.log({}.constructor === Object); // true

// Null 데이터 어떻게 타입을 확인할 수 있을까 ?
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(null).slice(8, -1)); // Null
console.log(Object.prototype.toString.call("test").slice(8, -1)); // Strings

// 코드 재사용
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType("안녕하세요!"));
console.log(checkType(function () {}));
console.log(checkType(true));
console.log(checkType(undefined));

console.log(10 + 20);
console.log(20 - 10);
console.log(10 * 20);
console.log(20 / 10);
console.log(20 % 3);

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(5)); // false
console.log(isEven(10)); // true

const a = 10;
// a = a + 10; // runtime Error

// 증감 연산자 ( Increment & Decrement )
let c = 30;
console.log(c++);
console.log(c);

let d = 30;
console.log(++d);
console.log(d);

let e = 30;

console.log(e--);
console.log(e);

let f = 30;
console.log(--f);
console.log(f);
