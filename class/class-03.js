function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

class NewUser {
    constructor(firstName, lastName) {
        this.fistName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// class 문법은 자바스크립트가 기존에 가지고 있던 Prototype 이라는 방식을 사용해서 새로운 문법으로 돌아가는 방식.
// NewUser 클래스라고 불려도 되며, NewUser 함수라고 불리우고 NewUser 객체로도 불리우지만, 어떻게 불러우는게 중요하는게 아닌,
// new 키워드를 통해 함수처럼 호출을 해서 인스턴스를 생성하여 사용할 수 있음.
