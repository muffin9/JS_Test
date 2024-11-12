// 원시형 데이터 타입

// 문자열, String
const str1 = "Hello, World!";
const str2 = "World!";
const str3 = `Hello ${str2}`;
// clg -> console.log 자동완성
console.log(str3);

// 숫자, Number
// 주의할점: 숫자데이터와 다른 타입의 값을 연산할 경우 Error.
const num1 = 123;
const num2 = -123;
const num3 = -123.5678;
const pi = 3.14; // 부동 소수점.

console.log(num3 + undefined); // 출력 값 NaN : Not a Number
// NaN ? 타입 자체는 숫자 데이터인데 특정한 숫자 값으로 표현할 수 없기 때문에 NaN으로 표시하여 출력.
console.log(typeof (num3 + undefined)); // number
console.log(typeof pi); // number

const a = 0.1;
const b = 0.2;

console.log(a + b);
console.log(typeof (a + b).toFixed(1));
console.log(typeof Number(a + b).toFixed(1));
console.log(Number(a + b).toFixed(1));

// Boolean - true, false
const turthy = true;
const falsy = false;

if (turthy) {
    console.log("True!!");
} else {
    console.log("false!!");
}

// Null: 빈 값. 명시적으로 표현한 것으로 의도적으로 변수를 비우거나 특정 상황에서 값이 없음을 나타낸다.
// undefined: 변수가 선언되었지만, 값이 할당되지 않았음, 객체에 존재하지 않는 속성에 접근할 때도 undefined 반환.

let value1 = null;

console.log(value1);
console.log(typeof value1);

// setTimeout(() => {
//     value1 = 30;
//     console.log(value1);
// }, 1000);

let value2;
console.log(value2);

const user = {
    name: "sj",
    age: 32,
};

console.log(user.name);
console.log(user.age);
console.log(user.email);
