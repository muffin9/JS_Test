class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user1 = new User("sj", "kim");
console.log(user1);

user1.firstName = "Neo";
console.log(user1);

// fullName을 확인되지 않을 걸 확인할 수 있는데
// firstName과 lastName이 바뀌더라도 전혀 변화가 없는 상태가 됩니다.
// 이런 부분을 보완하기 위해 메서드를 활용한다.

console.log(user1.getFullName());

class NewUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

const user2 = new NewUser("sj", "kim");
console.log(user2.fullName);
user2.lastName = "aaaaa";
user2.fullName = "dsfa fdsa";
console.log(user2);
