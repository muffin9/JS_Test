/** 콜백(Callback) */
/**
 * 함수는 하나의 데이터로써, 소괄호를 열고 닫지 않으면 하나의 함수 데이터이고
 * 소괄호를 열고 닫아야지만, 함수를 실행한다고 배웠습니다.
 */

const a = () => {
    console.log("A");
};

const b = () => {
    console.log("B");
};

a(b); // b는 콜백 함수. 함수/인자로 들어가는 또 다른 함수를 콜백이라고 부른다.

const c = (callback) => {
    // callback은 함수 데이터이므로, 소괄호를 열고 닫아서 실행 시킬 수 있다.
    console.log("C");
    callback();
};

const d = () => {
    console.log("D");
};

c(d);

// TODO 아래 두 코드 차이 제대로 인지하기.
const sum = (a, b) => {
    setTimeout(() => {
        return a + b;
    }, 1000);
};

console.log(sum(1, 2));
console.log(sum(3, 7));

// undefined 나오는 조건? 값이 할당되지 않을때, 존재하지 않는 객체 프로퍼티에 접근할 때, 함수의 리턴이 없을 때

const sum2 = (a, b, c) => {
    setTimeout(() => {
        c(a + b);
    }, 1000);
};

sum2(1, 2, (value) => {
    console.log(value);
});
