function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(7)); // NaN

// 매개변수 패턴(Parameter Pattern)
// 기본값 - Default Value
function sum1(a, b = 1) {
    return a + b;
}

console.log(sum1(1, 2)); // 3
console.log(sum1(7)); // 8

const user = {
    name: "sj",
    age: 30,
};

function getName(user) {
    const { name } = user;
    return name;
}

function getName2({ name }) {
    return name;
}

function getEmail({ email = "not email" }) {
    return email;
}

const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];

function getSecondItem([a, b, c]) {
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);
}

console.log(getSecondItem(fruits));

function add(...rest) {
    console.log(rest);
    console.log(arguments); // 유사 배열 (Array-Like) 배열 데이터는 아니기 때문에 활용도가 많이 떨어진다.

    return rest.reduce(function (acc, cur) {
        return acc + cur;
    });
}

console.log(add(1, 2, 3));
