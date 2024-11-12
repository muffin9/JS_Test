function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(10, 20));

const sum1 = (a, b) => {
    return a + b;
};

const sum2 = (a, b) => a + b;

const a = (x) => {
    console.log("x", x);
    return x + x;
};

const b = () => {
    return { value: 1 };
};

const c = () => {
    value: 1;
}; // 중괄호를 사용한 부분이 마치, 함수의 블록처럼 보이기 때문에, 자바스크립트 문법적으로 이해할 수 있는 코드가 아니기 때문에, 오류가 난다.

const d = () => ({ value: 1 }); // 위 문제를 해결하기 위해 객체 데이터를 소괄호로 묶어서 표현한다.
