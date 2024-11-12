// 파스칼케이스로 함수 만들기
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const user = new User("jin", "Kim");
console.log(user);

const user2 = new User("Neo", "Kim");
console.log(user2);

// 재사용하지 않는다면 객체 리터럴을 사용하는걸 권장.
// Prototype 일반함수를 할당해주면, 주의할 점은 여기서 화살표 함수를 작성하면 안된다.
// 화살표 함수로 정의하게 되면 this의 키워드의 정의가 달라지기 때문.

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

console.log(user.getFullName());
