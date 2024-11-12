// 참조 타입

// 배열

const fruits = new Array("사과", "바나나", "체리", "멜론", "수박", "딸기");
console.log(fruits);

const animals = ["호랑이", "사자", "코끼리", "원숭이", "악어"];
console.log(animals);
console.log(animals.length);
console.log(animals[1]);
console.log(animals[animals.length - 1]);
console.log(animals[0]);

const user = new Object();

user.name = "sj";
user.age = 30;
user.job = "developer";

console.log(user); // key-value형태로 조회
// 객체 리터럴 - 객체륾 만드는 형식으로, 중괄호({}) 라는 기호로 통해 만든다.

// 객체 데이터에서의 key는 고유값이며, 순서는 중요하지 X
// 동일한 키 값이 존재할 경우, 나중에 작성된 값으로 덮어 씌워진다.

const member = {
    name: "sj",
    age: 30,
    job: "developer",
};

const userA = {
    name: "userA",
    age: 17,
    job: "student",
};

// 객체 안에 또 다른 객체를 할당할 수도 있다.
const userB = {
    name: "userB",
    age: 18,
    brother: userA,
};

console.log(userB.brother);
const family = [userA, userB];
console.log(family);
console.log(family[0]);
console.log(family[1]["name"]);
