// 형 변환(Type Conversion)

const A = 1; // number
const B = "1"; // string

console.log(A == B); // 동등연산자(형변환이 일어남) true
console.log(A === B); // 되도록이면 일치 연산자를 사용하도록 한다. 타입 까지 비교! false

const C = 0;
const D = false;
const E = true;

console.log(C == D); // true
console.log(C == E); // false

// Truthy & Fasly
// 숫자 0은 거짓에 해당한다.
// null, undefined, false, NaN, 빈 문자데이터("")도 거짓에 해당한다.
